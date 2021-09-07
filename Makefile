SRC_DIR 			= src
PDF_DIR 			= $(SRC_DIR)/_build/pdf
PDF_NAME			= Apuntes_Algoritmos_y_programacion_I.pdf
SUMMARY_SCRIPT		= scripts/generar-indice.py
GLOSSARY_SCRIPT		= scripts/generar-glosario.py
GLOSSARY_JSON_PATH 	= $(SRC_DIR)/glosario.json

help:
	@echo "Las opciones disponibles son las siguientes:\n"
	@echo "make build\tCompila la página estática para publicar"
	@echo "make test\tPrueba la página localmente"
	@echo "make pdf\tGenera únicamente el PDF"
	@echo "make clean\tElimina todos los archivos generados con la herramienta"

build: clean glosario indice pdf
	npx honkit build

test: glosario indice
	npx honkit serve

pdf: glosario indice
	mkdir -p $(PDF_DIR)
	npx honkit pdf . $(PDF_DIR)/$(PDF_NAME)

clean:
	rm -f $(PDF_DIR)/* $(SRC_DIR)/GLOSSARY.md $(SRC_DIR)/SUMMARY.md
	rm -rf _book/

indice:
	python3 $(SUMMARY_SCRIPT) $(SRC_DIR) $(SRC_DIR)/SUMMARY.md

glosario:
	python3 $(GLOSSARY_SCRIPT) $(GLOSSARY_JSON_PATH) $(SRC_DIR)/GLOSSARY.md
