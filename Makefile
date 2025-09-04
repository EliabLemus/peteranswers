# ---------- overridable ----------
REGISTRY        ?= docker.io
DOCKER_USER     ?= elemusbarrios
IMAGE_NAME      ?= rest-express
CONTEXT_DIR     ?= .
DOCKERFILE_PATH ?= $(CONTEXT_DIR)/Dockerfile

TAGS            ?= latest 1.0.0

# Puerto interno expuesto por el contenedor (server Node en prod)
INTERNAL_PORT   ?= 3000
HOST_PORT       ?= 8080

# ---------- computed --------------
IMAGE_FULL_NAME := $(REGISTRY)/$(DOCKER_USER)/$(IMAGE_NAME)
DEFAULT_TAG     := $(firstword $(TAGS))

# ---------- meta ----------
.PHONY: all help build publish clean run stop logs tag-ls open

all: clean build                  ## limpia y compila

help:                             ## imprime ayuda inline
	@grep -E '^[a-zA-Z_-]+:.*?## .*$' $(MAKEFILE_LIST) | \
	  sort | \
	  awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-18s\033[0m %s\n", $$1, $$2}'

# ---------- build & publish ----------
build:                            ## build + retag para cada TAG
	docker build -f $(DOCKERFILE_PATH) -t $(IMAGE_FULL_NAME):$(DEFAULT_TAG) $(CONTEXT_DIR)
	$(foreach tag,$(filter-out $(DEFAULT_TAG),$(TAGS)), \
	  docker tag $(IMAGE_FULL_NAME):$(DEFAULT_TAG) $(IMAGE_FULL_NAME):$(tag);)

publish:                          ## push de todas las TAGS
	$(foreach tag,$(TAGS), docker push $(IMAGE_FULL_NAME):$(tag);)

tag-ls:                           ## lista imágenes locales
	@docker images $(IMAGE_FULL_NAME) --format '{{.Repository}}:{{.Tag}}\t{{.ID}}\t{{.CreatedSince}}'

clean:                            ## borra imágenes locales + prune
	-$(foreach tag,$(TAGS), docker rmi -f $(IMAGE_FULL_NAME):$(tag);)
	docker system prune -f

# ---------- ciclo local ----------
run:                              ## levanta el contenedor local para pruebas
	docker run -d --rm \
	  --name $(IMAGE_NAME) \
	  -p $(HOST_PORT):$(INTERNAL_PORT) \
	  $(IMAGE_FULL_NAME):$(DEFAULT_TAG)

stop:                             ## detiene el contenedor local
	- docker stop $(IMAGE_NAME)

logs:                             ## muestra logs del contenedor
	docker logs -f $(IMAGE_NAME)

open:                             ## abre en navegador (macOS). Linux: xdg-open
	@open http://localhost:$(HOST_PORT) 2>/dev/null || xdg-open http://localhost:$(HOST_PORT) 2>/dev/null || true
