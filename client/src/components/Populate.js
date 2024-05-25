import React from 'react';

const users = 
  // Your user data array goes here...


  [
    {
      "firstName": "Advik",
      "middleName": "Kumar",
      "lastName": "Gupta",
      "email": "advik.gupta@example.com",
      "password": "StrongP@ssw0rd1",
      "city": "Noida",
      "state": "Uttar Pradesh",
      "country": "India"
    },
    {
      "firstName": "Ananya",
      "middleName": "Mishra",
      "lastName": "Singh",
      "email": "ananya.singh@example.com",
      "password": "Passw0rd!Ananya",
      "city": "Varanasi",
      "state": "Uttar Pradesh",
      "country": "India"
    },
    {
      "firstName": "Arya",
      "middleName": "Thakur",
      "lastName": "Shah",
      "email": "arya.shah@example.com",
      "password": "Ary@1234Shah!",
      "city": "Bhubaneswar",
      "state": "Odisha",
      "country": "India"
    },
    {
      "firstName": "Ayush",
      "middleName": "Jain",
      "lastName": "Verma",
      "email": "ayush.verma@example.com",
      "password": "Verm@12345Jain",
      "city": "Guwahati",
      "state": "Assam",
      "country": "India"
    },
    {
      "firstName": "Dhruv",
      "middleName": "Patel",
      "lastName": "Kumar",
      "email": "dhruv.kumar@example.com",
      "password": "Dhruv@Kum@r2023",
      "city": "Agra",
      "state": "Uttar Pradesh",
      "country": "India"
    },
    {
      "firstName": "Ishika",
      "middleName": "Rao",
      "lastName": "Sharma",
      "email": "ishika.sharma@example.com",
      "password": "Sh@rma@Ishika123",
      "city": "Ranchi",
      "state": "Jharkhand",
      "country": "India"
    },
    {
      "firstName": "Kiara",
      "middleName": "Kumar",
      "lastName": "Mehta",
      "email": "kiara.mehta@example.com",
      "password": "Meht@Kiara1234",
      "city": "Raipur",
      "state": "Chhattisgarh",
      "country": "India"
    },
    {
      "firstName": "Krish",
      "middleName": "Shah",
      "lastName": "Gupta",
      "email": "krish.gupta@example.com",
      "password": "Kr!shGupt@5678",
      "city": "Thiruvananthapuram",
      "state": "Kerala",
      "country": "India"
    },
    {
      "firstName": "Kriti",
      "middleName": "Jha",
      "lastName": "Patel",
      "email": "kriti.patel@example.com",
      "password": "P@telKriti!123",
      "city": "Kochi",
      "state": "Kerala",
      "country": "India"
    },
    {
      "firstName": "Naman",
      "middleName": "Gupta",
      "lastName": "Shah",
      "email": "naman.shah@example.com",
      "password": "ShahNam@n@1234",
      "city": "Imphal",
      "state": "Manipur",
      "country": "India"
    },
    {
      "firstName": "Nikita",
      "middleName": "Verma",
      "lastName": "Singh",
      "email": "nikita.singh@example.com",
      "password": "Singh@Nikit@5678",
      "city": "Agartala",
      "state": "Tripura",
      "country": "India"
    },
    {
      "firstName": "Prisha",
      "middleName": "Kumar",
      "lastName": "Mishra",
      "email": "prisha.mishra@example.com",
      "password": "MishraPr!sh@123",
      "city": "Itanagar",
      "state": "Arunachal Pradesh",
      "country": "India"
    },
    {
      "firstName": "Reyansh",
      "middleName": "Sharma",
      "lastName": "Jain",
      "email": "reyansh.jain@example.com",
      "password": "JainRey@nsh567",
      "city": "Shillong",
      "state": "Meghalaya",
      "country": "India"
    },
    {
      "firstName": "Ria",
      "middleName": "Kumar",
      "lastName": "Thakur",
      "email": "ria.thakur@example.com",
      "password": "Th@kurRi@2023",
      "city": "Gangtok",
      "state": "Sikkim",
      "country": "India"
    },
    {
      "firstName": "Riya",
      "middleName": "Shah",
      "lastName": "Verma",
      "email": "riya.verma@example.com",
      "password": "Verm@Riy@2023",
      "city": "Aizawl",
      "state": "Mizoram",
      "country": "India"
    },
    {
      "firstName": "Rudra",
      "middleName": "Patel",
      "lastName": "Singh",
      "email": "rudra.singh@example.com",
      "password": "SinghRudr@2023",
      "city": "Kohima",
      "state": "Nagaland",
      "country": "India"
    },
    {
      "firstName": "Samarth",
      "middleName": "Verma",
      "lastName": "Jain",
      "email": "samarth.jain@example.com",
      "password": "J@inS@m@rth1234",
      "city": "Port Blair",
      "state": "Andaman and Nicobar Islands",
      "country": "India"
    },
    {
      "firstName": "Sanaya",
      "middleName": "Jain",
      "lastName": "Kumar",
      "email": "sanaya.kumar@example.com",
      "password": "Kum@rSan@y@2023",
      "city": "Pondicherry",
      "state": "Puducherry",
      "country": "India"
    },
    {
      "firstName": "Shaurya",
      "middleName": "Sharma",
      "lastName": "Mehta",
      "email": "shaurya.mehta@example.com",
      "password": "Meht@Shaury@1234",
      "city": "Chandigarh",
      "state": "Chandigarh",
      "country": "India"
    },
    {
      "firstName": "Shiv",
      "middleName": "Kumar",
      "lastName": "Gupta",
      "email": "shiv.gupta@example.com",
      "password": "Gupt@Shiv@2023",
      "city": "Leh",
      "state": "Ladakh",
      "country": "India"
    },
    {
      "firstName": "Shreya",
      "middleName": "Thakur",
      "lastName": "Sharma",
      "email": "shreya.sharma@example.com",
      "password": "Sh@rm@Shre@1234",
      "city": "Panaji",
      "state": "Goa",
      "country": "India"
    },
    {
      "firstName": "Tanishq",
      "middleName": "Jain",
      "lastName": "Patel",
      "email": "tanishq.patel@example.com",
      "password": "P@t@lT@nishq5678",
      "city": "Daman",
      "state": "Daman and Diu",
      "country": "India"
    },
    {
      "firstName": "Vedant",
      "middleName": "Mehta",
      "lastName": "Shah",
      "email": "vedant.shah@example.com",
      "password": "Sh@hVed@nt1234",
      "city": "Silvassa",
      "state": "Dadra and Nagar Haveli",
      "country": "India"
    },
    {
      "firstName": "Vihaan",
      "middleName": "Gupta",
      "lastName": "Kumar",
      "email": "vihaan.kumar@example.com",
      "password": "Kum@rViha@n123",
      "city": "Kavaratti",
      "state": "Lakshadweep",
      "country": "India"
    },
    {
      "firstName": "Yuvraj",
      "middleName": "Jain",
      "lastName": "Sharma",
      "email": "yuvraj.sharma@example.com",
      "password": "Sh@rm@Yuvr@j2023",
      "city": "New Delhi",
      "state": "Delhi",
      "country": "India"
    },
    {
      "firstName": "Aadhira",
      "middleName": "Kumar",
      "lastName": "Shah",
      "email": "aadhira.shah@example.com",
      "password": "Sh@hA@dhir@5678",
      "city": "Mumbai",
      "state": "Maharashtra",
      "country": "India"
    },
    {
      "firstName": "Aditya",
      "middleName": "Sharma",
      "lastName": "Patel",
      "email": "aditya.patel@example.com",
      "password": "P@telAdity@1234",
      "city": "Ahmedabad",
      "state": "Gujarat",
      "country": "India"
    },
    {
      "firstName": "Advait",
      "middleName": "Kumar",
      "lastName": "Gupta",
      "email": "advait.gupta@example.com",
      "password": "Gupt@Adv@it@5678",
      "city": "Bangalore",
      "state": "Karnataka",
      "country": "India"
    },
    {
      "firstName": "Ahaan",
      "middleName": "Jain",
      "lastName": "Shah",
      "email": "ahaan.shah@example.com",
      "password": "Sh@hAh@an1234",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "country": "India"
    },
    {
      "firstName": "Amaira",
      "middleName": "Kumar",
      "lastName": "Mehta",
      "email": "amaira.mehta@example.com",
      "password": "Meht@Am@ir@5678",
      "city": "Hyderabad",
      "state": "Telangana",
      "country": "India"
    },
    {
      "firstName": "Amit",
      "middleName": "Patel",
      "lastName": "Singh",
      "email": "amit.singh@example.com",
      "password": "Singh@Am!t1234",
      "city": "Kolkata",
      "state": "West Bengal",
      "country": "India"
    },
    {
      "firstName": "Amrita",
      "middleName": "Jain",
      "lastName": "Kumar",
      "email": "amrita.kumar@example.com",
      "password": "Kum@rAmrit@5678",
      "city": "Pune",
      "state": "Maharashtra",
      "country": "India"
    },
    {
      "firstName": "Anay",
      "middleName": "Shah",
      "lastName": "Verma",
      "email": "anay.verma@example.com",
      "password": "Verm@An@y1234",
      "city": "Jaipur",
      "state": "Rajasthan",
      "country": "India"
    },
    {
      "firstName": "Anika",
      "middleName": "Kumar",
      "lastName": "Sharma",
      "email": "anika.sharma@example.com",
      "password": "Sh@rm@Anik@5678",
      "city": "Lucknow",
      "state": "Uttar Pradesh",
      "country": "India"
    },
    {
      "firstName": "Ansh",
      "middleName": "Jha",
      "lastName": "Jain",
      "email": "ansh.jain@example.com",
      "password": "J@in@nsh1234",
      "city": "Chandigarh",
      "state": "Chandigarh",
      "country": "India"
    },
    {
      "firstName": "Anshika",
      "middleName": "Verma",
      "lastName": "Patel",
      "email": "anshika.patel@example.com",
      "password": "P@telAnshik@5678",
      "city": "Delhi",
      "state": "Delhi",
      "country": "India"
    },
    {
      "firstName": "Anvi",
      "middleName": "Jain",
      "lastName": "Shah",
      "email": "anvi.shah@example.com",
      "password": "Sh@hAnv!1234",
      "city": "Mumbai",
      "state": "Maharashtra",
      "country": "India"
    },
    {
      "firstName": "Arnav",
      "middleName": "Sharma",
      "lastName": "Mehta",
      "email": "arnav.mehta@example.com",
      "password": "Meht@Arnav5678",
      "city": "Ahmedabad",
      "state": "Gujarat",
      "country": "India"
    },
    {
      "firstName": "Aryahi",
      "middleName": "Kumar",
      "lastName": "Singh",
      "email": "aryahi.singh@example.com",
      "password": "SinghAry@h!1234",
      "city": "Bangalore",
      "state": "Karnataka",
      "country": "India"
    },
    {
      "firstName": "Atharva",
      "middleName": "Jain",
      "lastName": "Gupta",
      "email": "atharva.gupta@example.com",
      "password": "Gupt@Ath@rv@5678",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "country": "India"
    },
    {
      "firstName": "Avni",
      "middleName": "Shah",
      "lastName": "Kumar",
      "email": "avni.kumar@example.com",
      "password": "Kum@r@vni1234",
      "city": "Hyderabad",
      "state": "Telangana",
      "country": "India"
    },
    {
      "firstName": "Bhavya",
      "middleName": "Mehta",
      "lastName": "Sharma",
      "email": "bhavya.sharma@example.com",
      "password": "Sh@rm@Bh@vy@5678",
      "city": "Kolkata",
      "state": "West Bengal",
      "country": "India"
    },
    {
      "firstName": "Daksh",
      "middleName": "Patel",
      "lastName": "Verma",
      "email": "daksh.verma@example.com",
      "password": "Verm@D@ksh1234",
      "city": "Pune",
      "state": "Maharashtra",
      "country": "India"
    },
    {
      "firstName": "Dhriti",
      "middleName": "Kumar",
      "lastName": "Singh",
      "email": "dhriti.singh@example.com",
      "password": "SinghDhrit!1234",
      "city": "Jaipur",
      "state": "Rajasthan",
      "country": "India"
    },
    {
      "firstName": "Divyansh",
      "middleName": "Shah",
      "lastName": "Jain",
      "email": "divyansh.jain@example.com",
      "password": "J@inDivy@nsh5678",
      "city": "Lucknow",
      "state": "Uttar Pradesh",
      "country": "India"
    },
    {
      "firstName": "Gauri",
      "middleName": "Kumar",
      "lastName": "Shah",
      "email": "gauri.shah@example.com",
      "password": "Sh@hG@uri1234",
      "city": "Chandigarh",
      "state": "Chandigarh",
      "country": "India"
    },
    {
      "firstName": "Guru",
      "middleName": "Sharma",
      "lastName": "Mehta",
      "email": "guru.mehta@example.com",
      "password": "Meht@Gur!1234",
      "city": "Delhi",
      "state": "Delhi",
      "country": "India"
    },
    {
      "firstName": "Harshit",
      "middleName": "Jain",
      "lastName": "Patel",
      "email": "harshit.patel@example.com",
      "password": "P@telH@rshit5678",
      "city": "Mumbai",
      "state": "Maharashtra",
      "country": "India"
    },
    {
      "firstName": "Ira",
      "middleName": "Shah",
      "lastName": "Singh",
      "email": "ira.singh@example.com",
      "password": "SinghI@r@1234",
      "city": "Ahmedabad",
      "state": "Gujarat",
      "country": "India"
    },
    {
      "firstName": "Ishaan",
      "middleName": "Mehta",
      "lastName": "Kumar",
      "email": "ishaan.kumar@example.com",
      "password": "Kum@rIsh@@n5678",
      "city": "Bangalore",
      "state": "Karnataka",
      "country": "India"
    },
    {
      "firstName": "Jiya",
      "middleName": "Jain",
      "lastName": "Sharma",
      "email": "jiya.sharma@example.com",
      "password": "Sh@rm@Jiy@5678",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "country": "India"
    },
    {
      "firstName": "Kabir",
      "middleName": "Kumar",
      "lastName": "Gupta",
      "email": "kabir.gupta@example.com",
      "password": "Gupt@K@b!r1234",
      "city": "Hyderabad",
      "state": "Telangana",
      "country": "India"
    },
    {
      "firstName": "Kanishk",
      "middleName": "Shah",
      "lastName": "Verma",
      "email": "kanishk.verma@example.com",
      "password": "Verm@K@nishk5678",
      "city": "Kolkata",
      "state": "West Bengal",
      "country": "India"
    },
    {
      "firstName": "Kavya",
      "middleName": "Kumar",
      "lastName": "Jain",
      "email": "kavya.jain@example.com",
      "password": "J@inK@vy@1234",
      "city": "Pune",
      "state": "Maharashtra",
      "country": "India"
    },
    {
      "firstName": "Kiaan",
      "middleName": "Shah",
      "lastName": "Patel",
      "email": "kiaan.patel@example.com",
      "password": "P@telKi@@n5678",
      "city": "Jaipur",
      "state": "Rajasthan",
      "country": "India"
    },
    {
      "firstName": "Krisha",
      "middleName": "Kumar",
      "lastName": "Singh",
      "email": "krisha.singh@example.com",
      "password": "SinghKr!sh@1234",
      "city": "Lucknow",
      "state": "Uttar Pradesh",
      "country": "India"
    },
    {
      "firstName": "Manasvi",
      "middleName": "Jain",
      "lastName": "Sharma",
      "email": "manasvi.sharma@example.com",
      "password": "Sh@rm@Man@s@5678",
      "city": "Chandigarh",
      "state": "Chandigarh",
      "country": "India"
    },
    {
      "firstName": "Mohammad",
      "middleName": "Mehta",
      "lastName": "Verma",
      "email": "mohammad.verma@example.com",
      "password": "Verm@Moh@mm@d5678",
      "city": "Delhi",
      "state": "Delhi",
      "country": "India"
    },
    {
      "firstName": "Moksha",
      "middleName": "Shah",
      "lastName": "Kumar",
      "email": "moksha.kumar@example.com",
      "password": "Kum@rMoksh@5678",
      "city": "Mumbai",
      "state": "Maharashtra",
      "country": "India"
    },
    {
      "firstName": "Myra",
      "middleName": "Kumar",
      "lastName": "Gupta",
      "email": "myra.gupta@example.com",
      "password": "Gupt@Myr@1234",
      "city": "Ahmedabad",
      "state": "Gujarat",
      "country": "India"
    },
    {
      "firstName": "Navya",
      "middleName": "Sharma",
      "lastName": "Singh",
      "email": "navya.singh@example.com",
      "password": "SinghN@vy@5678",
      "city": "Bangalore",
      "state": "Karnataka",
      "country": "India"
    },
    {
      "firstName": "Neel",
      "middleName": "Jain",
      "lastName": "Shah",
      "email": "neel.shah@example.com",
      "password": "Sh@hNeel1234",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "country": "India"
    },
    {
      "firstName": "Nivaan",
      "middleName": "Kumar",
      "lastName": "Verma",
      "email": "nivaan.verma@example.com",
      "password": "Verm@Niv@@n5678",
      "city": "Hyderabad",
      "state": "Telangana",
      "country": "India"
    },
    {
      "firstName": "Pranav",
      "middleName": "Sharma",
      "lastName": "Jain",
      "email": "pranav.jain@example.com",
      "password": "J@inPr@n@v5678",
      "city": "Kolkata",
      "state": "West Bengal",
      "country": "India"
    },
    {
      "firstName": "Preeti",
      "middleName": "Mehta",
      "lastName": "Patel",
      "email": "preeti.patel@example.com",
      "password": "P@telPr@@ti1234",
      "city": "Jaipur",
      "state": "Rajasthan",
      "country": "India"
    },
    {
      "firstName": "Rachit",
      "middleName": "Jain",
      "lastName": "Kumar",
      "email": "rachit.kumar@example.com",
      "password": "Kum@rR@chit5678",
      "city": "Lucknow",
      "state": "Uttar Pradesh",
      "country": "India"
    },
    {
      "firstName": "Riyaan",
      "middleName": "Shah",
      "lastName": "Singh",
      "email": "riyaan.singh@example.com",
      "password": "SinghRiy@@n1234",
      "city": "Chandigarh",
      "state": "Chandigarh",
      "country": "India"
    },
    {
      "firstName": "Ruhan",
      "middleName": "Kumar",
      "lastName": "Sharma",
      "email": "ruhan.sharma@example.com",
      "password": "Sh@rm@Ruh@n5678",
      "city": "Delhi",
      "state": "Delhi",
      "country": "India"
    },
    {
      "firstName": "Ruhi",
      "middleName": "Jain",
      "lastName": "Mehta",
      "email": "ruhi.mehta@example.com",
      "password": "Meht@Ruhi5678",
      "city": "Mumbai",
      "state": "Maharashtra",
      "country": "India"
    },
    {
      "firstName": "Ruhanika",
      "middleName": "Shah",
      "lastName": "Patel",
      "email": "ruhanika.patel@example.com",
      "password": "P@telRuh@nik@5678",
      "city": "Ahmedabad",
      "state": "Gujarat",
      "country": "India"
    }
  ]
  
  


function Populate() {
  const populate = async () => {
    for (let user of users) {
        //user=await JSON.parse(user)
        console.log(user)
      try {
        const response = await fetch('http://localhost:5000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...user, "Admin": "false" }),
          credentials: 'include',
        });
        if (response.ok) {
          console.log('User added successfully');
        } else {
          console.log('Failed to add user');
        }
      } catch (error) {
        console.error('Error adding user:', error);
      }
      // Add a delay of 1 second between each request
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  };

  return (
    <div>
      <button onClick={populate}>Populate</button>
    </div>
  );
}

export default Populate;
