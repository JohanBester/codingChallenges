// Build a random dataset of sales transactions
// comprising X number of transactions ...
//      between certain dates
//      with random customer names
//      and random transaction amounts

// import randomCustomerNames from "./randomCustomerNames";
// randomCustomerNames(times)
// import randomDates from "./randomDates";
// randomDates(start, end, times) in the format
//    of... (yyyy, m, d), (yyyy, m, d)
// import randomAmount from "./randomAmount";
// randomAmount(min, max, times) delimited as ...
//    1 dollar <= amount <= 1 million

function randomDataset(times, startDate, endDate, minAmount, MaxAmount) {
  // Randomizer for all the functions
  const rand = function randomNumber(min = 1.1, max = 99.99) {
    let numba = Math.floor(Math.random() * (max - min) + min);
    return numba;
  };

  let dataset = [];
  let names = randomCustomerNames(times);
  let dates = randomDates(startDate, endDate, times);
  let amounts = randomAmount(minAmount, MaxAmount, times);

  for (let i = 0; i <= times - 1; i++) {
    let record = {
      name: names[i],
      date: dates[i],
      amount: amounts[i],
    };

    dataset.push(record);
  }
  console.log(dataset);

  function randomCustomerNames(times) {
    /*
    Create a list of X number of random customer names using...
    random honorific, random initials, and random last name
    */
    function selectLastName() {
      const lastNamesList =
        "SMITH, JOHNSON, WILLIAMS, BROWN, JONES, GARCIA, MILLER, DAVIS, RODRIGUEZ, MARTINEZ, HERNANDEZ, LOPEZ, GONZALEZ, WILSON, ANDERSON, THOMAS, TAYLOR, MOORE, JACKSON, MARTIN, LEE, PEREZ, THOMPSON, WHITE, HARRIS, SANCHEZ, CLARK, RAMIREZ, LEWIS, ROBINSON, WALKER, YOUNG, ALLEN, KING, WRIGHT, SCOTT, TORRES, NGUYEN, HILL, FLORES, GREEN, ADAMS, NELSON, BAKER, HALL, RIVERA, CAMPBELL, MITCHELL, CARTER, ROBERTS, GOMEZ, PHILLIPS, EVANS, TURNER, DIAZ, PARKER, CRUZ, EDWARDS, COLLINS, REYES, STEWART, MORRIS, MORALES, MURPHY, COOK, ROGERS, GUTIERREZ, ORTIZ, MORGAN, COOPER, PETERSON, BAILEY, REED, KELLY, HOWARD, RAMOS, KIM, COX, WARD, RICHARDSON, WATSON, BROOKS, CHAVEZ, WOOD, JAMES, BENNETT, GRAY, MENDOZA, RUIZ, HUGHES, PRICE, ALVAREZ, CASTILLO, SANDERS, PATEL, MYERS, LONG, ROSS, FOSTER, JIMENEZ, POWELL, JENKINS, PERRY, RUSSELL, SULLIVAN, BELL, COLEMAN, BUTLER, HENDERSON, BARNES, GONZALES, FISHER, VASQUEZ, SIMMONS, ROMERO, JORDAN, PATTERSON, ALEXANDER, HAMILTON, GRAHAM, REYNOLDS, GRIFFIN, WALLACE, MORENO, WEST, COLE, HAYES, BRYANT, HERRERA, GIBSON, ELLIS, TRAN, MEDINA, AGUILAR, STEVENS, MURRAY, FORD, CASTRO, MARSHALL, OWENS, HARRISON, FERNANDEZ, MCDONALD, WOODS, WASHINGTON, KENNEDY, WELLS, VARGAS, HENRY, CHEN, FREEMAN, WEBB, TUCKER, GUZMAN, BURNS, CRAWFORD, OLSON, SIMPSON, PORTER, HUNTER, GORDON, MENDEZ, SILVA, SHAW, SNYDER, MASON, DIXON, MUNOZ, HUNT, HICKS, HOLMES, PALMER, WAGNER, BLACK, ROBERTSON, BOYD, ROSE, STONE, SALAZAR, FOX, WARREN, MILLS, MEYER, RICE, SCHMIDT, GARZA, DANIELS, FERGUSON, NICHOLS, STEPHENS, SOTO, WEAVER, RYAN, GARDNER, PAYNE, GRANT, DUNN, KELLEY, SPENCER, HAWKINS, ARNOLD, PIERCE, VAZQUEZ, HANSEN, PETERS, SANTOS, HART, BRADLEY, KNIGHT, ELLIOTT, CUNNINGHAM, DUNCAN, ARMSTRONG, HUDSON, CARROLL, LANE, RILEY, ANDREWS, ALVARADO, RAY, DELGADO, BERRY, PERKINS, HOFFMAN, JOHNSTON, MATTHEWS, PENA, RICHARDS, CONTRERAS, WILLIS, CARPENTER, LAWRENCE, SANDOVAL, GUERRERO, GEORGE, CHAPMAN, RIOS, ESTRADA, ORTEGA, WATKINS, GREENE, NUNEZ, WHEELER, VALDEZ, HARPER, BURKE, LARSON, SANTIAGO, MALDONADO, MORRISON, FRANKLIN, CARLSON, AUSTIN, DOMINGUEZ, CARR, LAWSON, JACOBS, OBRIEN, LYNCH, SINGH, VEGA, BISHOP, MONTGOMERY, OLIVER, JENSEN, HARVEY, WILLIAMSON, GILBERT, DEAN, SIMS, ESPINOZA, HOWELL, LI, WONG, REID, HANSON, LE, MCCOY, GARRETT, BURTON, FULLER, WANG, WEBER, WELCH, ROJAS, LUCAS, MARQUEZ, FIELDS, PARK, YANG, LITTLE, BANKS, PADILLA, DAY, WALSH, BOWMAN, SCHULTZ, LUNA, FOWLER, MEJIA, DAVIDSON, ACOSTA, BREWER, MAY, HOLLAND, JUAREZ, NEWMAN, PEARSON, CURTIS, CORTEZ, DOUGLAS, SCHNEIDER, JOSEPH, BARRETT, NAVARRO, FIGUEROA, KELLER, AVILA, WADE, MOLINA, STANLEY, HOPKINS, CAMPOS, BARNETT, BATES, CHAMBERS, CALDWELL, BECK, LAMBERT, MIRANDA, BYRD, CRAIG, AYALA, LOWE, FRAZIER, POWERS, NEAL, LEONARD, GREGORY, CARRILLO, SUTTON, FLEMING, RHODES, SHELTON, SCHWARTZ, NORRIS, JENNINGS, WATTS, DURAN, WALTERS, COHEN, MCDANIEL, MORAN, PARKS, STEELE, VAUGHN, BECKER, HOLT, DELEON, BARKER, TERRY, HALE, LEON, HAIL, BENSON, HAYNES, HORTON, MILES, LYONS, PHAM, GRAVES, BUSH, THORNTON, WOLFE, WARNER, CABRERA, MCKINNEY, MANN, ZIMMERMAN, DAWSON, LARA, FLETCHER, PAGE, MCCARTHY, LOVE, ROBLES, CERVANTES, SOLIS, ERICKSON, REEVES, CHANG, KLEIN, SALINAS, FUENTES, BALDWIN, DANIEL, SIMON, VELASQUEZ, HARDY, HIGGINS, AGUIRRE, LIN, CUMMINGS, CHANDLER, SHARP, BARBER, BOWEN, OCHOA, DENNIS, ROBBINS, LIU, RAMSEY, FRANCIS, GRIFFITH, PAUL, BLAIR, OCONNOR, CARDENAS, PACHECO, CROSS, CALDERON, QUINN, MOSS, SWANSON, CHAN, RIVAS, KHAN, RODGERS, SERRANO, FITZGERALD, ROSALES, STEVENSON, CHRISTENSEN, MANNING, GILL, CURRY, MCLAUGHLIN, HARMON, MCGEE, GROSS, DOYLE, GARNER, NEWTON, BURGESS, REESE, WALTON, BLAKE, TRUJILLO, ADKINS, BRADY, GOODMAN, ROMAN, WEBSTER, GOODWIN, FISCHER, HUANG, POTTER, DELACRUZ, MONTOYA, TODD, WU, HINES, MULLINS, CASTANEDA, MALONE, CANNON, TATE, MACK, SHERMAN, HUBBARD, HODGES, ZHANG, GUERRA, WOLF, VALENCIA, SAUNDERS, FRANCO, ROWE, GALLAGHER, FARMER, HAMMOND, HAMPTON, TOWNSEND, INGRAM, WISE, GALLEGOS, CLARKE, BARTON, SCHROEDER, MAXWELL, WATERS, LOGAN, CAMACHO, STRICKLAND, NORMAN, PERSON, COLON, PARSONS, FRANK, HARRINGTON, GLOVER, OSBORNE, BUCHANAN, CASEY, FLOYD, PATTON, IBARRA, BALL, TYLER, SUAREZ, BOWERS, OROZCO, SALAS, COBB, GIBBS, ANDRADE, BAUER, CONNER, MOODY, ESCOBAR, MCGUIRE, LLOYD, MUELLER, HARTMAN, FRENCH, KRAMER, MCBRIDE, POPE, LINDSEY, VELAZQUEZ, NORTON, MCCORMICK, SPARKS, FLYNN, YATES, HOGAN, MARSH, MACIAS, VILLANUEVA, ZAMORA, PRATT, STOKES, OWEN, BALLARD, LANG, BROCK, VILLARREAL, CHARLES, DRAKE, BARRERA, CAIN, PATRICK, PINEDA, BURNETT, MERCADO, SANTANA, SHEPHERD, BAUTISTA, ALI, SHAFFER, LAMB, TREVINO, MCKENZIE, HESS, BEIL, OLSEN, COCHRAN, MORTON, NASH, WILKINS, PETERSEN, BRIGGS, SHAH, ROTH, NICHOLSON, HOLLOWAY, LOZANO, RANGEL, FLOWERS, HOOVER, SHORT, ARIAS, MORA, VALENZUELA, BRYAN, MEYERS, WEISS, UNDERWOOD, BASS, GREER, SUMMERS, HOUSTON, CARSON, MORROW, CLAYTON, WHITAKER, DECKER, YODER, COLLIER, ZUNIGA, CAREY, WILCOX, MELENDEZ, POOLE, ROBERSON, LARSEN, CONLEY, DAVENPORT, COPELAND, MASSEY, LAM, HUFF, ROCHA, CAMERON, JEFFERSON, HOOD, MONROE, ANTHONY, PITTMAN, HUYNH, RANDALL, SINGLETON, KIRK, COMBS, MATHIS, CHRISTIAN, SKINNER, BRADFORD, RICHARD, GALVAN, WALL, BOONE, KIRBY, WILKINSON, BRIDGES, BRUCE, ATKINSON, VELEZ, MEZA, ROY, VINCENT, YORK, HODGE, VILLA, ABBOTT, ALLISON, TAPIA, GATES, CHASE, SOSA, SWEENEY, FARRELL, WYATT, DALTON, HORN, BARRON, PHELPS, YU, DICKERSON, HEATH, FOLEY, ATKINS, MATHEWS, BONILLA, ACEVEDO, BENITEZ, ZAVALA, HENSLEY, GLENN, CISNEROS, HARRELL, SHIELDS, RUBIO, HUFFMAN, CHOI, BOYER, GARRISON, ARROYO, BOND, KANE, HANCOCK, CALLAHAN, DILLON, CLINE, WIGGINS, GRIMES, ARELLANO, MELTON, ONEILL, SAVAGE, HO, BELTRAN, PITTS, PARRISH, PONCE, RICH, BOOTH, KOCH, GOLDEN, WARE, BRENNAN, MCDOWELL, MARKS, CANTU, HUMPHREY, BAXTER, SAWYER, CLAY, TANNER, HUTCHINSON, KAUR, BERG, WILEY, GILMORE, RUSSO, VILLEGAS, HOBBS, KEITH, WILKERSON, AHMED, BEARD, MCCLAIN, MONTES, MATA, ROSARIO, VANG, WALTER, HENSON, ONEAL, MOSLEY, MCCLURE, BEASLEY, STEPHENSON, SNOW, HUERTA, PRESTON, VANCE, BARRY, JOHNS, EATON, BLACKWELL, DYER, PRINCE, MACDONALD, SOLOMON, GUEVARA, STAFFORD, ENGLISH, HURST, WOODARD, CORTES, SHANNON, KEMP, NOLAN, MCCULLOUGH, MERRITT, MURILLO, MOON, SALGADO, STRONG, KLINE, CORDOVA, BARAJAS, ROACH, ROSAS, WINTERS, JACOBSON, LESTER, KNOX, BULLOCK, KERR, LEACH, MEADOWS, ORR, DAVILA, WHITEHEAD, PRUITT, KENT, CONWAY, MCKEE, BARR, DAVID, DEJESUS, MARIN, BERGER, MCINTYRE, BLANKENSHIP, GAINES, PALACIOS, CUEVAS, BARTLETT, DURHAM, DORSEY, MCCALL, ODONNELL, STEIN, BROWNING, STOUT, LOWERY, SLOAN, MCLEAN, HENDRICKS, CALHOUN, SEXTON, CHUNG, GENTRY, HULL, DUARTE, ELLISON, NIELSEN, GILLESPIE, BUCK, MIDDLETON, SELLERS, LEBLANC, ESPARZA, HARDIN, BRADSHAW, MCINTOSH, HOWE, LIVINGSTON, FROST, GLASS, MORSE, KNAPP, HERMAN, STARK, BRAVO, NOBLE, SPEARS, WEEKS, CORONA, FREDERICK, BUCKLEY, MCFARLAND, HEBERT, ENRIQUEZ, HICKMAN, QUINTERO, RANDOLPH, SCHAEFER, WALLS, TREJO, HOUSE, REILLY, PENNINGTON, MICHAEL, CONRAD, GILES, BENJAMIN, CROSBY, FITZPATRICK, DONOVAN, MAYS, MAHONEY, VALENTINE, RAYMOND, MEDRANO, HAHN, MCMILLAN, SMALL, BENTLEY, FELIX, PECK, LUCERO, BOYLE, HANNA, PACE, RUSH, HURLEY, HARDING, MCCONNELL, BERNAL, NAVA, AYERS, EVERETT, VENTURA, AVERY, PUGH, MAYER, BENDER, SHEPARD, MCMAHON, LANDRY, CASE, SAMPSON, MOSES, MAGANA, BLACKBURN, DUNLAP, GOULD, DUFFY, VAUGHAN, HERRING, MCKAY, ESPINOSA, RIVERS, FARLEY, BERNARD, ASHLEY, FRIEDMAN, POTTS, TRUONG, COSTA, CORREA, BLEVINS, NIXON, CLEMENTS, FRY, DELAROSA, BEST, BENTON, LUGO, PORTILLO, DOUGHERTY, CRANE, HALEY, PHAN, VILLALOBOS, BLANCHARD, HORNE, FINLEY, QUINTANA, LYNN, ESQUIVEL, BEAN, DODSON, MULLEN, XIONG, HAYDEN, CANO, LEVY, HUBER, RICHMOND, MOYER, LIM, FRYE, SHEPPARD, MCCARTY, AVALOS, BOOKER, WALLER, PARRA, WOODWARD, JARAMILLO, KRUEGER, RASMUSSEN, BRANDT, PERALTA, DONALDSON, STUART, FAULKNER, MAYNARD, GALINDO, COFFEY, ESTES, SANFORD, BURCH, MADDOX, VO, OCONNELL, VU, ANDERSEN, SPENCE, MCPHERSON, CHURCH, SCHMITT, STANTON, LEAL, CHERRY, COMPTON, DUDLEY, SIERRA, POLLARD, ALFARO, HESTER, PROCTOR, LU, HINTON, NOVAK, GOOD, MADDEN, MCCANN, TERRELL, JARVIS, DICKSON, REYNA, CANTRELL, MAYO, BRANCH, HENDRIX, ROLLINS, ROWLAND, WHITNEY, DUKE, ODOM, DAUGHERTY, TRAVIS, TANG, ARCHER";

      lastNamesList2 = lastNamesList.split(", ");
      let lstnm = lastNamesList2[rand(1, 1000) - 1];
      return lstnm;
    }

    function selectHonorific() {
      // honorific inputs
      const honorificArr = [
        "Mr",
        "Mrs",
        "Miss",
        "Ms",
        "Mx",
        "Sir",
        "Madam",
        "Hon",
        "Dr",
        "Lady",
        "Lord",
      ];

      let hnrfc = honorificArr[rand(1, 11) - 1];
      return hnrfc;
    }

    function selectInitials() {
      // initials inputs
      const initialArr = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ];

      let ntls = "";
      // Select random number of initials up to 3
      let times = rand(0, 3);
      for (let i = 0; i <= times; i++) {
        let letter = rand(1, 26) - 1;
        ntls += initialArr[letter];
      }
      return ntls;
    }

    // create collection of random customer names
    let t = 1;
    let randomCustomerNames = [];
    // loop for number of names in collection
    while (t <= times) {
      let honorific = selectHonorific().toString();
      let initials = selectInitials().toString();
      let lastName = selectLastName().toString();
      let fullName = `${honorific} ${initials} ${lastName}`;
      randomCustomerNames.push(fullName);
      t++;
    }
    return randomCustomerNames;
  }

  function randomDates(start, end, times = 1) {
    /*
    Write a file of random dates.
    Start and End values must be comma separated 
    and in the format of (yyyy, m, d), (yyyy, m, d)
    Start and End values are optional.
    Start and end values can be omitted by using "0".
    If omitted start defaults to January 1, 1970, UTC.
    End value will default to current date.
    Times is the number of times to run this function.
    Times is optional and the default is 1 time.
    Output is sent to a text file
    */
    !start ? (start = new Date(0)) : (start = new Date(start));
    !end ? (end = new Date()) : (end = new Date(end));

    let numTimes = times;
    let dataset = [];
    let i = 1;

    while (i < numTimes + 1) {
      let rndDate = new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      );
      dataset.push(rndDate.toDateString());
      i++;
    }
    return dataset;
  }

  function randomAmount(min = 1.1, max = 999999.99, times = 1) {
    /*
    Return a series of random dollar amounts
    And write them to an output file
    Min and Max are positive numbers with ...
        1 dollar <= amount <= 1 million 
    Times is the number of times to run this function
      default is 1 time
    */
    const styleObj = {
      style: "currency",
      currency: "USD",
    };
    let i = 1;
    let dataset = [];

    while (i <= times) {
      let rndAmount = Math.random() * (max - min + 1) + min;
      rndAmount = rndAmount.toLocaleString("en-US", styleObj);
      dataset.push(rndAmount);
      i++;
    }
    return dataset;
  }
}

console.log(randomDataset(10, (2019, 6, 1), (2020, 10, 31), 27, 3777));
