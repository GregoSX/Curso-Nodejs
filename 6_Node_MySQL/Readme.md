# Instalação MySQL Linux

Atualize os pacotes

`sudo apt-get update && sudo apt-get upgrade`

Instale o MySQL

`sudo apt install mysql-server`

Execute o comando de secure installation

`sudo mysql_secure_installation`

Coloque uma senha de baixa segurança (Utilize isso apenas para aprendizado): 0

Verifique a instalação

`systemctl status mysql.service`

Para acessar o MySQL

`sudo mysql -u root`