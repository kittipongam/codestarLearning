## For ubantu

sudo apt install mysql-server
sudo mysql


## Window 

https://codestar.work/mysql-windows.pdf

	install MSVC runtime latest version Microsoft visual C++ runtime

download MySQL community server	

C:\
	‘--tools
		‘--mysql
			‘--bin
				‘-- mysqld.exe  server | daemon
				‘-- mysql.exe  	client

open 2 terminals
	1st terminal 
initialize and generate a new password
\tools\mysql\bin\mysqld.exe –console –initialize

		start deamon and leave it run forever
		\tools\mysql\bin\mysql.exe –console
	2nd terminal 
		connect to daemon
		\tools\mysql\bin\mysql.exe –user root –password
			enter password

change root password
	alter user 'root'@'localhost' identified by 'P@ssw0rd';
	
use it from terminal

## MacOS
Download MySQL community server (DMG file) from internet
install and create a pasword

\usr\local\mysql\bin\mysql –user root –password

### Command

show databases;

create database online;     online = name of DB
drop database online;

create database exchange;   create database 
use exchange;

create table staff
(
	name  		varchar(80),
	gender		char,
	salary		float
);

create table symbol
(
	name  		varchar(80),
	bid		float,
	ask		float
);

create table branch1
{
	name  		varchar(80),
	area		float,
};


show tables;
show columns from table_name;

Insert
insert into table_name (column1,column2,column3) values (value1,value2,value3)
insert into staff(name,gender,salary) values ('David Beckham','M',48000.0);
insert into staff(name,salary,gender) values(‘Frank lampard’,35000.0,’M’);

Update Edit
update table_name
set 	_______output_______ 
where	______condition______

Show Table
select column_name  
from table_name 
where __condition__

Delete
delete from table_name where __condition__
delete from branch where name =’Hat Yai’:

Add column
alter table staff add status varchar(80);


create a simple text file, with SQL script:
file: build.sql
create database coffee_shop;
use coffee_shop;
create table branch(name varchar(80),area float);
insert into branch(name,area) values(‘BangYai’,80.0);
insert into branch(name,area) values(‘Rang Sit’,120.0);
insert into branch(name,area) values(‘Bang Na’,100.0);
