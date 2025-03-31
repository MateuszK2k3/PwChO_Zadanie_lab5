# ZADANIE LAB 5 SPRAWOZDANIE
## 1. Polecenie użyte do budowy obrazu
```shell
docker build --build-arg VERSION=1.0.2 -t lab5-web .
```

polecenie docker build
[!polecenie docker build](images/build.png)

## 2. Polecenie uruchamiające server
```shell
docker run -d -p 8080:8080 --name lab5-webapp lab5-web
```

polecenie docker run
[!polecenie docker run](images/run.png)

## 3. Polecenie potwierdzające działanie kontenera
```shell
docker ps
```

polecenie docker ps
[!polecenie docker ps](images/ps.png)

## 4. zrzut ekranu aplikacji

[!zrzut ekranu aplikacji](images/app-view.png)