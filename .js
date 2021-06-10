/* Para iniciar o docker/postgres:
1° executar o comando docker ps -a
2° procurar o container chamado de database, ou outro container
3° copiar o container ID => (13773a7ff806, do database)
*° copiar o container ID => (f4da98bb7368 , do mongo)
*° copiar o container ID => (f90472d8fa31  , do redis:alpine)
4° Utilizar o comando docker start e inserir ao lado o container ID, assim:
=> docker start 13773a7ff806 f4da98bb7368  f90472d8fa31
*/
