/*==================================================
/database/utils/seedDB.js

It seeds the database with several initial students and campuses.
==================================================*/
const { Campus, Student } = require('../models');  // Import database models

// Seed database
const seedDB = async () => {
	// Create a new campus
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		address: "695 Park Ave, New York, NY 10065",
		description: "This is a school in New York, New York."
	});
	// Create a new campus
	const dummy_campus2 = await Campus.create({
		name: "Queens College",
		address: "65-30 Kissena Blvd, Queens, NY 11367",
		description: "This is a school in Queens, New York."
	});
	// Create a new campus
	const dummy_campus3 = await Campus.create({
		name: "Brooklyn College",
		address: "2900 Bedford Ave, Brooklyn, NY 11210",
		description: "This is a school in Brooklyn, New York."
	});
	// Create a new campus
	const dummy_campus4 = await Campus.create({
		name: "Lehman College",
		address: "250 Bedford Park Blvd W, Bronx, NY 10468",
		description: "This is a school in the Bronx, New York."
	});
	
	// Create a new student for a campus
	const dummy_student = await Student.create({
		firstname: "Joe",
      lastname: "Smith",
	  email: "joesmith@gmail.com",
	});
	// Create a new student for a campus
	const dummy_student2 = await Student.create({
		firstname: "Mary",
      lastname: "Johnson",
	  email: "maryjohnson@gmail.com",
	});
	// Create a new student for a campus
	const dummy_student3 = await Student.create({
		firstname: "Adrian",
      lastname: "Portillo",
	  email: "ap@gmail.com",
	});
	// Create a new student for a campus
	const dummy_student4 = await Student.create({
		firstname: "Natasa",
      lastname: "Kostandinovic",
	  email: "natasa@aol.com",
	});
	// Create a new student for a campus
	const dummy_student5 = await Student.create({
		firstname: "Adam",
      lastname: "Schween",
	  email: "ashween@outlook.com",
	});
	// Create a new student for a campus
	const dummy_student6 = await Student.create({
		firstname: "Davon",
      lastname: "Miller",
	  email: "incredibledavon@yahoo.com",
	});
	// Create a new student for a campus
	const dummy_student7 = await Student.create({
		firstname: "Angel",
      lastname: "Santana",
	  email: "heavenlyangel@gmail.com",
	});
	// Create a new student for a campus
	const dummy_student8 = await Student.create({
		firstname: "Chelsea",
      lastname: "Montero",
	  email: "chelseathecelebrity@yahoo.com",
	});
	// Create a new student for a campus
	const dummy_student9 = await Student.create({
		firstname: "Jaiden",
      lastname: "Cruz",
	  email: "lowerkasej@gmail.com",
	});
	// Create a new student for a campus
	const dummy_student10 = await Student.create({
		firstname: "Emely",
      lastname: "Rivas",
	  email: "senoritarivas@aol.com",
	});

	// Add students to campuses
	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);
	await dummy_student3.setCampus(dummy_campus2);
	await dummy_student5.setCampus(dummy_campus);
	await dummy_student7.setCampus(dummy_campus3);
	await dummy_student8.setCampus(dummy_campus);
	await dummy_student10.setCampus(dummy_campus4);
}

// Export the database seeding function
module.exports = seedDB;