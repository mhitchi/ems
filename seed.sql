
INSERT INTO departments (name)
VALUES ("Minister of Magic"),("Department of Magical Law Enforcement"),("Department of Magical Accidents and Catastrophes"),("Department for the Regulation and Control of Magical Creatures"),("Department of Interational Magical Cooperation"),("Department of Magical Transportation"),("Department of Magical Games and Sports"),("Department of Mysteries"),("Magical Maintenance");

INSERT INTO roles (title, department_id)
VALUES ("Minister of Magic", 1),("Unspeakable", 8),("Head of Department of Magical Law Enforcement", 2),("Head of Department of Magical Accidents and Catastrophes", 3),("Head of Department for the Regulation and Control of Magical Creatures", 4),("Head of Department of Interational Magical Cooperation", 5),("Head of Department of Magical Transportation", 6),("Head of Department of Magical Games and Sports", 7);

INSERT INTO roles (title, salary, department_id)
VALUES ("Auror", 150000.00, 2), ("Improper Use of Magic Officer", 70000.00, 2), ("Wizengamot Member", 100000.00, 2), ("Magical Law Enforcement Squad", 70000.00, 2),("Misuse of Muggle Artefacts Officer", 65000.00, 2),("Detection and Confiscation of Counterfeit Defensive Spells and Protective Objects Officer", 50000.00, 2),("Accidental Magic Reversal Squad", 75000.00, 3),("Obliviator", 100000.00, 3),("Muggle-Worthy Excuse Commitee Member", 50000.00, 3),("Beast Division", 30000.00, 4),("Being Division", 30000.00, 4),("Spirit Division", 30000.00, 4),("International Magical Trading Standards Body Member", 100000.00, 5),("International Magical Lawyer", 100000.00, 5),("International Confederation of Wizards Member", 100000.00, 5),("Floo Network Authority", 60000.00, 6),("Broom Regulatory Committee Member", 50000.00, 6),("Portkey Office Member", 45000.00, 6),("Apparition Test Centre Member", 40000.00, 6),("British and Irish Quidditch League Headquarters Member", 60000.00, 7),("Official Gobstones Club Member", 30000.00, 7),("Ludicrous Patents Office Member", 40000.00, 7),("Senior Undersecretary to the Minister of Magic", 80000.00, 1),("Magical Maintenance Worker", 20000.00, 9);

-- Perkins is actually head of the Misuse of Muggle Artefacts Office
INSERT INTO employees(last_name, role_id)
VALUES ("Perkins", 13);

-- Arthur Weasley is actually head of the Detection and Confiscation of Counterfeit Defensive Spells and Protective Objects Office
-- Rufus Scrimgeor also an auror at one point
-- Bob Ogden was head of the Magical Law Enforcement Squad at one point
-- some of these employees are dead
-- employees without managers
INSERT INTO employees (first_name, last_name, role_id, is_manager)
VALUES ("Cornelius", "Fudge", 1, true),("Rufus", "Scrimgeor", 1, true),("Harry", "Potter", 3, true),("Arthur", "Weasley", 14, true),("Barty", "Crouch Sr.", 6, true),("Ludo", "Bagman", 8, true),("Broderick", "Bode", 2, false),("Reginald", "Cattermole", 32, false),("Dirk", "Cresswell", 19, false),("Amos", "Diggory", 18, false),("Madam", "Edgecombe", 24, false),("Newt", "Scamander", 18, false),("Amelia", "Bones", 3, true),("Pius", "Thicknesse", 3, true);

-- also heads of magical law enforcement

-- employees with managers
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Kingsley", "Shacklebolt", 9, 3),("Nymphadora", "Tonks", 9, 15),("Alastor", "Moody", 9, 16),("Frank", "Longbottom", 9, 15),("Alice", "Longbottom", 9, 15),("John", "Dawlish", 9, 3),("Gawain", "Robards", 9, 3),("Hesphaestus", "Gore", 9, 3),("Mafalda", "Hopkirk", 10, 3),("Albus", "Dumbledore", 11, 16),("Percy", "Weasley", 11, 3),("Griselda", "Marchbanks", 11, 3),("Bob", "Ogden", 12, 15),("Tiberius", "Ogden", 11, 16),("Dolores", "Umbridge", 31, 1), 