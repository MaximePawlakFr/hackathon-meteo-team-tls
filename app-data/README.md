# Que fait l'appli data ?

L'appli data permet à ce jour de :
- convertir des fichiers csv en fichiers parquet en local

# Comment utiliser l'appli data ?

Avant d'utiliser l'appli, quelques étapes au préalable sont nécessaires : la création de l'environnement virtuel
et l'installation des packages requis par l'appli. Nous conseillons d'avoir la version 3.9 de Python.

**Création et activation de l'environnement virtuel**
```
python3 -m venv venv
source venv/bin/activate
```

**Installation des packages**
```
pip install -U pip
pip install -r requirements.txt
```

**Utilisation de l'appli**

Pour convertir des fichiers csv en fichiers parquet en local, il suffira de lancer ces commandes :
```
cd scripts/
python3 convert_csv_to_parquet.py
```

Enfin, pour convertir des fichiers grib2 en fichiers parquet, le script `convert_grib2_to_parquet.py` devra être exécuté
dans un notebook en modifiant les chemins des fichiers.

