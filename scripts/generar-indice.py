#!/usr/bin/python3

import os, sys

def main(argv):
	indice = {}

	carpetas = os.listdir(argv[0])
	carpetas.sort()
	for carpeta in carpetas:
		if carpeta.startswith("Capitulo"):
			indice[carpeta] = {}

			archivos = os.listdir(argv[0] + os.sep + carpeta)
			archivos.sort(key = lambda nombre: nombre[::-1])
			for archivo in archivos:
				if archivo.endswith(".md"):
					file = open(argv[0] + os.sep + carpeta + os.sep + archivo, "r")
					indice[carpeta][archivo] = buscarTitulos(file)
					file.close()

	escribirIndice(argv[1], indice)

def buscarTitulos(file):
	h1 = None
	fenced = False
	titulos = {}
	for linea in file.readlines():
		if linea.startswith("```"):
			fenced = not fenced
		if fenced: continue

		if linea.startswith("# "):
			h1 = linea[2:-1]
			titulos[h1] = []
		elif linea.startswith("## ") and h1:
			titulos[h1] += [linea[3:-1]]

	return titulos

def escribirIndice(path, indice):
	file = open(path, "w")
	file.write("* [Algoritmos y programación I](README.md)\n\n")

	for carpeta in indice.keys():
		file.write("## Capítulo {}\n".format(carpeta[8:]))

		for archivo in indice[carpeta]:
			for h1 in indice[carpeta][archivo]:
				file.write("* [{}]({}/{})\n".format(h1, carpeta, archivo))

				for h2 in indice[carpeta][archivo][h1]:
					file.write("\t* [{}]({}/{}#{})\n".format(h2, carpeta, archivo, urlizar(h2)))

	file.write("\n---\n\n")
	file.write("* [Glosario](GLOSSARY.md)\n")
	file.write("* [Contribuir](CONTRIBUTING.md)\n")

	file.close()

def urlizar(titulo):
	return titulo.replace(" ", "-").replace("?", "").lower()

if __name__ == "__main__":
	main(sys.argv[1:])
