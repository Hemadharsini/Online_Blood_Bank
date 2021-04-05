delete from blood_bank where created_on < now() - interval 90 DAY;

insert into login_model values(Admin1,1,admin,admin,a,7575757575,Admin,admin);