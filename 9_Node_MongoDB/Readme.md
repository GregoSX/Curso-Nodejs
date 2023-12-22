1.sudo apt install dirmngr gnupg apt-transport-https ca-certificates software-properties-common

2.echo "deb http://security.ubuntu.com/ubuntu impish-security main" | sudo tee /etc/apt/sources.list.d/impish-security.list

3. Vá para o usuário root sudo -i e cole istowget http://archive.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.1f-1ubuntu2_amd64.deb

4.apt update

5.apt install libssl1.1

6.wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -

7.echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list

8.apt update

9.apt install -y mongodb-org