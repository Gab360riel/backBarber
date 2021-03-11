/* Para iniciar o docker/postgres:
1° executar o comando docker ps -a
2° procurar o container chamado de database, ou outro container
3° copiar o container ID => (9919a5b151bb, do database)
*° copiar o container ID => (7ec98747339e, do mongo)
*° copiar o container ID => (5c04fce7be49, do redis:alpine)
4° Utilizar o comando docker start e inserir ao lado o container ID, assim:
=> docker start 9919a5b151bb 7ec98747339e 5c04fce7be49
*/
