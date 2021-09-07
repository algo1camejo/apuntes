#!/usr/bin/python3

import sys, json

def main(argv):
	f_def = open(argv[0])
	f_glo = open(argv[1], "w")

	definiciones = json.load(f_def)
	orderedList = sorted(definiciones.keys(), key = lambda x: x.lower())

	f_glo.write("# Glosario\n---\n\n")
	for termino in orderedList:
		f_glo.write("## {}\n{}\n\n".format(termino, definiciones[termino]))

	f_def.close()
	f_glo.close()


if __name__ == "__main__":
	main(sys.argv[1:])
