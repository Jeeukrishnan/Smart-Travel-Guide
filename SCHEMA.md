# smart_travel_guide_webApp

## create table users (
	username varchar(10) not null,
	password varchar(100) not null,
	fullname varchar(20) not null,
	email varchar(50) not null,
	unique(username,email),
	unique(username),
	unique(email)
);


## create table tourist_place (
    id INT NOT NULL AUTO_INCREMENT,
    city VARCHAR(30) NOT NULL,
    region VARCHAR(20) NOT NULL,
    country VARCHAR(20) NOT NULL DEFAULT 'IN',
    dailyCost DECIMAL(6,2) NOT NULL,
    aviTour int not null,
    bookedTour int not null,
    PRIMARY KEY (id),
    UNIQUE (city, region, country),
    CHECK (dailyCost > 0)
);

## create table review (
    id INT NOT NULL auto_increment,
    numStars INT NOT NULL,
    locationid int not null,
    detailedReview VARCHAR(1000),
    submissionDate DATETIME NOT NULL,
    author VARCHAR(35) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (author) REFERENCES users(username),
    FOREIGN KEY(locationid) REFERENCES tourist_place(id),
    CHECK (numStars >= 1 AND numStars <= 10)
);


## create table place_pics (
       id int not null auto_increment,
       locationid int not null,
       caption varchar(50) default 'pic',
       description varchar(1000),
       -- img longblob not null,
       img varchar(200) not null,
       primary key(id),
       FOREIGN KEY (locationid) REFERENCES tourist_place(id)
);

<!-- ## create table payment (
       id INT NOT NULL AUTO_INCREMENT,
       username VARCHAR(20) not null,
       amount DECIMAL(10,2) NOT NULL,
       paymentType ENUM('debit', 'credit'),
       cardNo VARCHAR(16) NOT NULL,
       PRIMARY KEY (id),
       FOREIGN KEY(username) REFERENCES users(username),
       CHECK (amount > 0)
);
 -->

## create table tourbook(
       id int not null,
       username varchar(20) null,
       locationid int not null,
       checkin date not null,
       checkout date not null,
       noOfticket int not null,
       <!-- paymentid int not null, -->
       primary key(id),
       FOREIGN key(username) REFERENCES users(username),
       FOREIGN key(locationid) REFERENCES tourist_place(id),
       <!-- FOREIGN KEY(paymentid) REFERENCES payment(id) -->

);


## create table hotel (
       id INT NOT NULL auto_increment,
       name varchar(100) NOT NULL,
       dailyCost DECIMAL(6,2) NOT NULL,
       address VARCHAR(30),
       locationid INT NOT NULL,
       roomAvi int not null,
       roomBook int not null,
       noOfStar int not null,
       amenities varchar(1000) not null,
       aboutHotel varchar(1000) not null,
       PRIMARY KEY(id),
       PRIMARY KEY(name),
       FOREIGN KEY (locationid) REFERENCES tourist_place(id),
       CHECK (dailyCost > 0),
       CHECK (noOfStar >= 1 AND noOfStar <= 10)
);

## create table hotelbook(
       id int not null,
       username varchar(20) null,
       hotelid int not null,
       checkin date not null,
       checkout date not null,
       noOfrooms int not null,
       <!-- paymentid int not null, -->
       primary key(id),
       FOREIGN key(username) REFERENCES users(username),
       FOREIGN key(hotelid) REFERENCES hotel(id),
       <!-- FOREIGN KEY(paymentid) REFERENCES payment(id) -->
);

## create table booking (
       id INT NOT NULL auto_increment,
       username varchar(20) not null,
       hotelbookid int not null,
       tourbookid int not null,
       PRIMARY KEY (id),
       FOREIGN KEY(hotelbookid) REFERENCES hotelbook(id),
       FOREIGN KEY(tourbookid) REFERENCES tourbook(id),
       FOREIGN KEY(username) REFERENCES users(username)
);     

## create table hotelreview (

    id INT NOT NULL auto_increment,
    hotelname varchar(100) not null,
    detailedReview VARCHAR(1000),
    submissionDate DATETIME NOT NULL,
    author VARCHAR(35) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (author) REFERENCES users(username),
    FOREIGN KEY(hotelname) REFERENCES hotel(name)
);

## create view city_in_hotel
 	as select h.id as hotelid,
	h.name as hotelname,
	h.address as hoteladd,
	h.noOfStar as rating,
	h.dailyCost as cost_per_room,
	h.roomAvi as room_avi,
	h.img_url as imgurl,
	t.id as cityid
	from hotel h, tourist_place t where t.id=h.locationid;



