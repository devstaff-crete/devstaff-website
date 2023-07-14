type Event = {
  date: `${number}/${number}/${number}`;
  time: `${number}:${number}`;
  title: string;
  location: string;
  locationUrl?: string;
  eventUrl: string;
};

export const events: Event[] = [
  {
    date: '13/07/2023',
    time: '19:00',
    title: 'Battle of Java Frameworks',
    location: 'FoRTH, Step-C Building',
    locationUrl:
      "https://www.google.com/maps/place/35%C2%B018'21.4%22N+25%C2%B004'28.8%22E/@35.30594,25.074657,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xe51f99caa40ecf3c!8m2!3d35.30594!4d25.074657",
    eventUrl: 'https://www.meetup.com/devstaff/events/294641142/'
  },
  {
    date: '08/06/2023',
    time: '19:00',
    title: 'Unlocking Digital Marketing Success',
    location: 'FoRTH, Step-C Building',
    locationUrl:
      "https://www.google.com/maps/place/35%C2%B018'21.4%22N+25%C2%B004'28.8%22E/@35.30594,25.074657,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xe51f99caa40ecf3c!8m2!3d35.30594!4d25.074657",
    eventUrl: 'https://www.meetup.com/devstaff/events/293884023/'
  },
  {
    date: '11/05/2023',
    time: '19:00',
    title: 'Exploring DevOps and Terraform for IaC and CI/CD',
    location: 'FoRTH, Step-C Building',
    locationUrl:
      "https://www.google.com/maps/place/35%C2%B018'21.4%22N+25%C2%B004'28.8%22E/@35.30594,25.074657,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xe51f99caa40ecf3c!8m2!3d35.30594!4d25.074657",
    eventUrl: 'https://www.meetup.com/devstaff/events/293282845/'
  },
  {
    date: '05/04/2023',
    time: '19:00',
    title: 'From developer to entrepreneur',
    location: 'FoRTH, Step-C Building',
    locationUrl:
      "https://www.google.com/maps/place/35%C2%B018'21.4%22N+25%C2%B004'28.8%22E/@35.30594,25.074657,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xe51f99caa40ecf3c!8m2!3d35.30594!4d25.074657",
    eventUrl: 'https://www.meetup.com/devstaff/events/292549805/'
  },
  {
    date: '09/03/2023',
    time: '19:00',
    title: 'React & Next.js',
    location: 'FoRTH, Step-C Building',
    locationUrl:
      "https://www.google.com/maps/place/35%C2%B018'21.4%22N+25%C2%B004'28.8%22E/@35.30594,25.074657,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xe51f99caa40ecf3c!8m2!3d35.30594!4d25.074657",
    eventUrl: 'https://www.meetup.com/devstaff/events/291958795/'
  },
  {
    date: '09/02/2023',
    time: '19:00',
    title: 'Web Accessibility',
    location: 'FoRTH, Step-C Building',
    locationUrl:
      "https://www.google.com/maps/place/35%C2%B018'21.4%22N+25%C2%B004'28.8%22E/@35.30594,25.074657,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xe51f99caa40ecf3c!8m2!3d35.30594!4d25.074657",
    eventUrl: 'https://www.meetup.com/devstaff/events/291363458/'
  },
  {
    date: '08/12/2022',
    time: '19:00',
    title: 'Authentication (AuthN) & Authorization (AuthZ)',
    location: 'FoRTH, Step-C Building',
    locationUrl:
      "https://www.google.com/maps/place/35%C2%B018'21.4%22N+25%C2%B004'28.8%22E/@35.30594,25.074657,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xe51f99caa40ecf3c!8m2!3d35.30594!4d25.074657",
    eventUrl: 'https://www.meetup.com/devstaff/events/289951423/'
  },
  {
    date: '13/10/2022',
    time: '19:00',
    title: 'Rust',
    location: 'FoRTH, Step-C Building',
    locationUrl: 'https://goo.gl/maps/nKysa4tszKjgPXPR9',
    eventUrl: 'https://www.meetup.com/devstaff/events/288873469/'
  },
  {
    date: '14/07/2022',
    time: '19:00',
    title: 'DeFi - Reshaping the very essence of finance and economies',
    location: 'FoRTH, Step-C Building',
    locationUrl: 'https://goo.gl/maps/nKysa4tszKjgPXPR9',
    eventUrl: 'https://www.meetup.com/devstaff/events/286994191/'
  },
  {
    date: '07/06/2022',
    time: '19:00',
    title: 'Java Next - From Amber to Loom, from Panama to Valhalla',
    location: 'FoRTH, ENISA Building',
    locationUrl: 'https://goo.gl/maps/nKysa4tszKjgPXPR9',
    eventUrl: 'https://www.meetup.com/devstaff/events/286142452/'
  },
  {
    date: '10/02/2022',
    time: '19:00',
    title: 'IntelliJ super productivity',
    location: 'Online meetup, through zoom',
    locationUrl: '',
    eventUrl: 'https://www.meetup.com/devstaff/events/283802958/'
  },
  {
    date: '13/01/2022',
    time: '19:00',
    title: 'Monitoring and Alerting Tools',
    location: 'Online meetup, through zoom',
    locationUrl: '',
    eventUrl: 'https://www.meetup.com/devstaff/events/283098567/'
  },
  {
    date: '14/10/2021',
    time: '19:00',
    title: 'Freelancing and Accounting',
    location: 'Online meetup, through zoom',
    locationUrl: '',
    eventUrl: 'https://www.meetup.com/devstaff/events/281300785'
  },
  {
    date: '09/09/2021',
    time: '19:00',
    title: 'Lightning Talks',
    location: 'Online meetup, through zoom',
    locationUrl: '',
    eventUrl: 'https://www.meetup.com/devstaff/events/280516827/'
  },
  {
    date: '08/07/2021',
    time: '19:00',
    title: 'Agile Software Development - Open discussion with panel',
    location: 'Online meetup, through zoom',
    locationUrl: '',
    eventUrl: 'https://www.meetup.com/devstaff/events/279283067/'
  },
  {
    date: '10/06/2021',
    time: '19:00',
    title: 'Python & Django',
    location: 'Online meetup, through zoom',
    locationUrl: '',
    eventUrl: 'https://www.meetup.com/devstaff/events/278686742/'
  },
  {
    date: '13/05/2021',
    time: '19:00',
    title: 'Testing',
    location: 'Online meetup, through zoom',
    locationUrl: '',
    eventUrl: 'https://www.meetup.com/devstaff/events/278046899/'
  },
  {
    date: '08/04/2021',
    time: '19:00',
    title: 'Laravel PHP Framework',
    location: 'Online meetup, through zoom',
    locationUrl: '',
    eventUrl: 'https://www.meetup.com/devstaff/events/277232144/'
  },
  {
    date: '11/03/2021',
    time: '19:00',
    title: 'Dart / Flutter',
    location: 'Online meetup, through zoom',
    locationUrl: '',
    eventUrl: 'https://www.meetup.com/devstaff/events/276717763/'
  },
  {
    date: '11/02/2021',
    time: '19:00',
    title: 'UI/UX Open discussion',
    location: 'Online meetup, through zoom',
    locationUrl: '',
    eventUrl: 'https://www.meetup.com/devstaff/events/276153832/'
  },
  {
    date: '14/01/2021',
    time: '19:00',
    title: 'Object Oriented Design Principles',
    location: 'Online meetup, through zoom',
    locationUrl: '',
    eventUrl: 'https://www.meetup.com/devstaff/events/275535417/'
  },
  {
    date: '10/12/2020',
    time: '19:00',
    title: 'Data Protection, Privacy and Android Apps',
    location: 'Online meetup, through zoom',
    locationUrl: '',
    eventUrl: 'https://www.meetup.com/devstaff/events/274868495/'
  },
  {
    date: '12/11/2020',
    time: '19:00',
    title: 'The Git Version Control System',
    location: 'Online meetup, through zoom',
    locationUrl: '',
    eventUrl: 'https://www.meetup.com/devstaff/events/274393092/'
  },
  {
    date: '08/10/2020',
    time: '19:00',
    title: 'gRPC: Forget about the REST',
    location: 'Online meetup, through zoom',
    locationUrl: '',
    eventUrl: 'https://www.meetup.com/devstaff/events/273573118/'
  },
  {
    date: '10/09/2020',
    time: '19:00',
    title: 'Availability and monitoring / alerting',
    location: 'Online meetup, through zoom',
    locationUrl: '',
    eventUrl: 'https://www.meetup.com/devstaff/events/273038979/'
  },
  {
    date: '09/07/2020',
    time: '19:00',
    title: 'Open Discussion - Back to socializing',
    location: 'Eukaliptos Park, Next to the cantine',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=35.332005%252C25.129463',
    eventUrl: 'https://www.meetup.com/devstaff/events/271750197/'
  },
  {
    date: '11/06/2020',
    time: '19:00',
    title: 'Go Language',
    location: 'Online meetup, through zoom',
    locationUrl: '',
    eventUrl: 'https://www.meetup.com/devstaff/events/271128666/'
  },
  {
    date: '14/05/2020',
    time: '19:00',
    title: 'Lightning Talks',
    location: 'Online meetup, through zoom',
    locationUrl: '',
    eventUrl: 'https://www.meetup.com/devstaff/events/270468862/'
  },
  {
    date: '13/02/2020',
    time: '19:00',
    title: 'Vue.js',
    location: 'Leoforos Ikarou 5 · Heraklion, Pancretan Cooperative Bank',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=35.338970%252C25.140550',
    eventUrl: 'https://www.meetup.com/devstaff/events/268503438/'
  },
  {
    date: '09/01/2020',
    time: '19:00',
    title: 'IoT - Smart Home',
    location: 'Leoforos Ikarou 5 · Heraklion, Pancretan Cooperative Bank',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=35.338970%252C25.140550',
    eventUrl: 'https://www.meetup.com/devstaff/events/267667245/'
  },
  {
    date: '12/12/2019',
    time: '19:00',
    title: 'UI - UX',
    location: 'Leoforos Ikarou 5 · Heraklion, Pancretan Cooperative Bank',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=35.338970%252C25.140550',
    eventUrl: 'https://www.meetup.com/devstaff/events/266941393/'
  },
  {
    date: '14/11/2019',
    time: '19:00',
    title: 'GraphQL',
    location: 'Leoforos Ikarou 5 · Heraklion, Pancretan Cooperative Bank',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=35.338970%252C25.140550',
    eventUrl: 'https://www.meetup.com/devstaff/events/266177674/'
  },
  {
    date: '10/10/2019',
    time: '19:00',
    title: 'Mobile App Development',
    location: 'Leoforos Ikarou 5 · Heraklion, Pancretan Cooperative Bank',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=35.338970%252C25.140550',
    eventUrl: 'https://www.meetup.com/devstaff/events/265374447/'
  },
  {
    date: '12/09/2019',
    time: '19:00',
    title: 'Automation',
    location: 'Leoforos Ikarou 5 · Heraklion, Pancretan Cooperative Bank',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=35.338970%252C25.140550',
    eventUrl: 'https://www.meetup.com/devstaff/events/264687108/'
  },
  {
    date: '11/07/2019',
    time: '19:00',
    title: 'Privacy by Design (PbD)',
    location: 'Leoforos Ikarou 5 · Heraklion, Pancretan Cooperative Bank',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=35.338970%252C25.140550',
    eventUrl: 'https://www.meetup.com/devstaff/events/262891225/'
  },
  {
    date: '13/06/2019',
    time: '19:00',
    title: 'Automated Testing',
    location: 'Leoforos Ikarou 5 · Heraklion, Pancretan Cooperative Bank',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=35.338970%252C25.140550',
    eventUrl: 'https://www.meetup.com/devstaff/events/261809354/'
  },
  {
    date: '09/05/2019',
    time: '19:00',
    title: 'Javascript',
    location: 'Leoforos Ikarou 5 · Heraklion, Pancretan Cooperative Bank',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=35.338970%252C25.140550',
    eventUrl: 'https://www.meetup.com/devstaff/events/261099327/'
  },
  {
    date: '11/04/2019',
    time: '19:00',
    title: 'DevOps',
    location: 'Leoforos Ikarou 5 · Heraklion, Pancretan Cooperative Bank',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=35.338970%252C25.140550',
    eventUrl: 'https://www.meetup.com/devstaff/events/260371485/'
  },
  {
    date: '14/03/2019',
    time: '19:00',
    title: 'Microservices',
    location: 'Leoforos Ikarou 5 · Heraklion, Pancretan Cooperative Bank',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=35.338970%252C25.140550',
    eventUrl: 'https://www.meetup.com/devstaff/events/259423881/'
  },
  {
    date: '07/02/2019',
    time: '19:00',
    title: 'Startup Idea Validation Kit',
    location: 'Leoforos Ikarou 5 · Heraklion, Pancretan Cooperative Bank',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=35.338970%252C25.140550',
    eventUrl: 'https://www.meetup.com/devstaff/events/258288640/'
  },
  {
    date: '10/01/2019',
    time: '19:00',
    title: 'Disaster Recovery: Beyond Backup Strategies',
    location: 'Leoforos Ikarou 5 · Heraklion, Pancretan Cooperative Bank',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=35.338970%252C25.140550',
    eventUrl: 'https://www.meetup.com/devstaff/events/257759964/'
  },
  {
    date: '13/12/2018',
    time: '19:00',
    title: 'Elasticsearch',
    location: 'Leoforos Ikarou 5 · Heraklion, Pancretan Cooperative Bank',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=35.338970%252C25.140550',
    eventUrl: 'https://www.meetup.com/devstaff/events/256432244/'
  },
  {
    date: '08/11/2018',
    time: '19:00',
    title: 'Cloud-native Applications.',
    location: 'Leoforos Ikarou 5 · Heraklion, Pancretan Cooperative Bank',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=35.338970%252C25.140550',
    eventUrl: 'https://www.meetup.com/devstaff/events/255971225/'
  },
  {
    date: '11/10/2018',
    time: '19:00',
    title: 'Remote Working: Hints, Tips, Advice, Pitfalls and open chat.',
    location: 'Leoforos Ikarou 5 · Heraklion, Pancretan Cooperative Bank',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=35.338970%252C25.140550',
    eventUrl: 'https://www.meetup.com/devstaff/events/255294273/'
  },
  {
    date: '13/09/2018',
    time: '19:00',
    title: '[Back to School] Lightning Talks',
    location: 'Leoforos Ikarou 5 · Heraklion, Pancretan Cooperative Bank',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=35.338970%252C25.140550',
    eventUrl: 'https://www.meetup.com/devstaff/events/254452437/'
  },
  {
    date: '12/07/2018',
    time: '19:00',
    title: '[Season Finale] Prototyping in Virtual Reality (VR)',
    location: 'Leoforos Ikarou 5 · Heraklion, Pancretan Cooperative Bank',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=35.338970%252C25.140550',
    eventUrl: 'https://www.meetup.com/devstaff/events/252182856/'
  },
  {
    date: '14/06/2018',
    time: '19:00',
    title: 'IDEs: Super-charging your productivity!',
    location: 'Leoforos Ikarou 5 · Heraklion, Pancretan Cooperative Bank',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=Leoforos+Ikarou+5%252C+Heraklion%252C+gr',
    eventUrl: 'https://www.meetup.com/devstaff/events/251061115/'
  },
  {
    date: '10/05/2018',
    time: '19:00',
    title: '[GDPR] General Data Protection Regulation',
    location: 'Leoforos Ikarou 5 · Heraklion, Pancretan Cooperative Bank',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=Leoforos+Ikarou+5%252C+Heraklion%252C+gr',
    eventUrl: 'https://www.meetup.com/devstaff/events/250184418/'
  },
  {
    date: '12/04/2018',
    time: '19:00',
    title: 'Machine Learning',
    location: 'Main Building, FoRTH',
    locationUrl:
      'https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en',
    eventUrl: 'https://www.meetup.com/devstaff/events/248921759/'
  },
  {
    date: '08/03/2018',
    time: '20:00',
    title: 'From Coder to Manager',
    location: 'Main Building, FoRTH',
    locationUrl:
      'https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en',
    eventUrl: 'https://www.meetup.com/devstaff/events/248331146/'
  },
  {
    date: '15/02/2018',
    time: '20:30',
    title: 'Functional Programming',
    location: 'Main Building, FoRTH',
    locationUrl:
      'https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en',
    eventUrl: 'https://www.meetup.com/devstaff/events/247415782/'
  },
  {
    date: '11/01/2018',
    time: '20:00',
    title: 'Javascript - Node.js / React / Angular / etc.',
    location: 'Main Building, FoRTH',
    locationUrl:
      'https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en',
    eventUrl: 'https://www.meetup.com/devstaff/events/244448622/'
  },
  {
    date: '14/12/2017',
    time: '20:00',
    title: 'Continuous Integration / Unit Testing:',
    location: 'Main Building, FoRTH',
    locationUrl:
      'https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en',
    eventUrl: 'https://www.meetup.com/devstaff/events/244448616/'
  },
  {
    date: '09/11/2017',
    time: '20:00',
    title: 'Microservices',
    location: 'Main Building, FoRTH',
    locationUrl:
      'https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en',
    eventUrl: 'https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/244448594/'
  },
  {
    date: '12/10/2017',
    time: '20:00',
    title: 'Lightning Talks',
    location: 'Main Building, FoRTH',
    locationUrl:
      'https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en',
    eventUrl:
      'https://www.meetup.com/preview/DevStaff-A-Developer-Community-Gathering-In-Crete/events/243718619/'
  },
  {
    date: '14/09/2017',
    time: '20:00',
    title: 'Bitcoin, Blockchain and the future:',
    location: 'Main Building, FoRTH',
    locationUrl:
      'https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en',
    eventUrl: 'https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/242708726/'
  },
  {
    date: '06/07/2017',
    time: '19:00',
    title: 'Contrib­uting & Maintaining Open Source Software',
    location: 'Main Building, FoRTH',
    locationUrl:
      'https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en',
    eventUrl: 'https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/240658389/'
  },
  {
    date: '08/06/2017',
    time: '20:00',
    title: 'Types of Hosting',
    location: 'Main Building, FoRTH',
    locationUrl:
      'https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en',
    eventUrl: 'https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/240025362/'
  },
  {
    date: '11/05/2017',
    time: '20:00',
    title: 'Agile Software Development',
    location: 'Ιδρύματα Α. & Μ. Καλοκαιρινού, Monis Agkarathou 9, Iráklion',
    locationUrl:
      'https://www.google.com/maps/place/%25CE%259A%25CE%25BF%25CE%25B9%25CE%25BD%25CF%2589%25CE%25BD%25CE%25B9%25CE%25BA%25CF%258C%25CF%2582+%25CE%25A7%25CF%258E%25CF%2581%25CE%25BF%25CF%2582,+%25CE%2599%25CE%25B4%25CF%2581%25CF%258D%25CE%25BC%25CE%25B1%25CF%2584%25CE%25B1+%25CE%2591.+%2526+%25CE%259C.+%25CE%259A%25CE%25B1%25CE%25BB%25CE%25BF%25CE%25BA%25CE%25B1%25CE%25B9%25CF%2581%25CE%25B9%25CE%25BD%25CE%25BF%25CF%258D/@35.3422929,25.1313681,17z/data=!4m13!1m7!3m6!1s0x149a5a2e4468d97b:0xc9b67f06818aa350!2sMonis+Agkarathou+9,+Iraklio+712+02,+Greece!3b1!8m2!3d35.3422929!4d25.1335568!3m4!1s0x149a5a2e443017fd:0xc010c2cffea2758c!8m2!3d35.3422929!4d25.1335568?hl=en',
    eventUrl: 'https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/238460133/'
  },
  {
    date: '06/04/2017',
    time: '20:00',
    title: 'Remote Working',
    location: 'Main Building, FoRTH',
    locationUrl:
      'https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en',
    eventUrl: 'https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/238459952/'
  },
  {
    date: '09/03/2017',
    time: '20:00',
    title: 'TOR',
    location: 'Main Building, FoRTH',
    locationUrl:
      'https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en',
    eventUrl: 'https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/237701354/'
  },
  {
    date: '09/02/2017',
    time: '20:00',
    title: 'CMS',
    location: 'Main Building, FoRTH',
    locationUrl:
      'https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en',
    eventUrl: 'https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/237337066/'
  },
  {
    date: '12/01/2017',
    time: '20:00',
    title: 'Lightning Talks',
    location: 'Main Building, FoRTH',
    locationUrl:
      'https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en',
    eventUrl: 'https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/236518707/'
  },
  {
    date: '08/12/2016',
    time: '20:00',
    title: 'Large Scale',
    location: 'Main Building, FoRTH',
    locationUrl:
      'https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en',
    eventUrl: 'https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/235331576/'
  },
  {
    date: '10/11/2016',
    time: '20:00',
    title: 'React.js',
    location: 'Main Building, FoRTH',
    locationUrl:
      'https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en',
    eventUrl: 'https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/235052750/'
  },
  {
    date: '13/10/2016',
    time: '20:00',
    title: 'SASS',
    location: 'Main Building, FoRTH',
    locationUrl:
      'https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en',
    eventUrl: 'https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/234328426/'
  },
  {
    date: '8/9/2016',
    time: '20:00',
    title: 'Lightning talks',
    location: 'Main Building, FoRTH',
    locationUrl:
      'https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en',
    eventUrl: 'https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/233882249/'
  },
  {
    date: '14/7/2016',
    time: '20:00',
    title: 'Password Management',
    location: 'Main Building, FoRTH',
    locationUrl:
      'https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en',
    eventUrl: 'https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/232532246/'
  },
  {
    date: '9/6/2016',
    time: '20:00',
    title: 'NoSQL',
    location: 'Main Building, FoRTH',
    locationUrl:
      'https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en',
    eventUrl: 'https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/231211928/'
  },
  {
    date: '12/5/2016',
    time: '20:00',
    title: 'Design Patterns',
    location: 'Main Building, FoRTH',
    locationUrl:
      'https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en',
    eventUrl: 'https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/230538966/'
  },
  {
    date: '14/4/2016',
    time: '20:00',
    title: 'IoT',
    location: 'Main Building, FoRTH',
    locationUrl:
      'https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en',
    eventUrl: 'https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/229757515/'
  },
  {
    date: '10/3/2016',
    time: '20:00',
    title: 'Business & StartUps',
    location: 'Main Building, FoRTH',
    locationUrl:
      'https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en',
    eventUrl: 'https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/228927029/'
  },
  {
    date: '11/2/2016',
    time: '20:00',
    title: 'Secure Development',
    location: 'Science & Technology Park of Crete, STEP-C',
    locationUrl: 'https://goo.gl/maps/9GbPNwvymg2BVwam6',
    eventUrl: 'https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/228230597/'
  },
  {
    date: '14/1/2016',
    time: '20:00',
    title: 'Mobile Development',
    location: 'Main Building, FoRTH',
    locationUrl:
      'https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en',
    eventUrl: 'https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/227356464/'
  },
  {
    date: '10/12/2015',
    time: '20:00',
    title: 'Unit Testing',
    location: 'Main Building, FoRTH',
    locationUrl:
      'https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en',
    eventUrl: 'https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/226695959/'
  },
  {
    date: '12/11/2015',
    time: '20:00',
    title: 'Design',
    location: 'Main Building, FoRTH',
    locationUrl:
      'https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en',
    eventUrl: 'https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/225897583/'
  },
  {
    date: '8/10/2015',
    time: '20:00',
    title: 'DevOps',
    location: 'Main Building, FoRTH',
    locationUrl:
      'https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en',
    eventUrl: 'https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/225364969/'
  },
  {
    date: '10/9/2015',
    time: '20:00',
    title: 'NodeJS',
    location: 'Main Building, FoRTH',
    locationUrl:
      'https://www.google.gr/maps/place/Foundation+for+Research+and+Technology+-+Hellas/@35.3051351,25.0725918,17z/data=!4m2!3m1!1s0x0000000000000000:0x0c8347768b841f2f?hl=en',
    eventUrl: 'https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/223851144/'
  },
  {
    date: '9/7/2015',
    time: '20:00',
    title: 'Git VCS',
    location: 'Science & Technology Park of Crete, STEP-C',
    locationUrl: 'https://goo.gl/maps/9GbPNwvymg2BVwam6',
    eventUrl: 'https://www.meetup.com/DevStaff-A-Developer-Community-Gathering-In-Crete/events/223500458/'
  }
];
