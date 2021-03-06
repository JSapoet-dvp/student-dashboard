import { v4 as uuidv4 } from 'uuid';

const studentData = [
    {
        // "id": "1",
        "first_name": "Evelyn",
        "last_name": "Hurdle",
        "gender": "Female",
        "email": "ehurdle1@blogs.com",
        "phone": "+502 338 858 2369",
        "date_of_birth": "18/9/1991",
        "photo": "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        // "id": "2",
        "first_name": "Aranka",
        "last_name": "Loynes",
        "gender": "Female",
        "email": "aloyneso@who.int",
        "phone": "+86 301 918 6347",
        "date_of_birth": "21/6/1976",
        "photo": "https://randomuser.me/api/portraits/women/67.jpg"
    },
    {
        // "id": "3",
        "first_name": "Floris",
        "last_name": "Straffon",
        "gender": "Male",
        "email": "fstraffon2@diigo.com",
        "phone": "+7 916 337 9914",
        "date_of_birth": "17/9/1973",
        "photo": "https://randomuser.me/api/portraits/men/90.jpg"
    },
    {
        // "id": "4",
        "first_name": "Hector",
        "last_name": "Brownlea",
        "gender": "Male",
        "email": "hbrownleah@drupal.org",
        "phone": "+962 245 844 3688",
        "date_of_birth": "3/2/1984",
        "photo": "https://randomuser.me/api/portraits/men/91.jpg"
    },
    {
        // "id": "5",
        "first_name": "Martina",
        "last_name": "Sans",
        "gender": "Female",
        "email": "msans5@dmoz.org",
        "phone": "+598 412 975 7830",
        "date_of_birth": "24/7/1963",
        "photo": "https://randomuser.me/api/portraits/women/51.jpg"
    },
    {
        // "id": "6",
        "first_name": "Maurits",
        "last_name": "Meany",
        "gender": "Male",
        "email": "mmeanyn@answers.com",
        "phone": "+86 981 255 5135",
        "date_of_birth": "8/8/1980",
        "photo": "https://randomuser.me/api/portraits/men/30.jpg"
    },
    {
        // "id": "7",
        "first_name": "Rahima",
        "last_name": "Fishburn",
        "gender": "Female",
        "email": "rfishburn7@google.co.uk",
        "phone": "+46 174 212 0119",
        "date_of_birth": "24/7/1976",
        "photo": "https://randomuser.me/api/portraits/women/88.jpg"
    },
    {
        // "id": "8",
        "first_name": "Sandra",
        "last_name": "Petren",
        "gender": "Female",
        "email": "spetren8@artisteer.com",
        "phone": "+7 290 172 1096",
        "date_of_birth": "30/9/1986",
        "photo": "https://randomuser.me/api/portraits/women/43.jpg"
    },
    {
        // "id": "9",
        "first_name": "Wietske",
        "last_name": "Haibel",
        "gender": "Female",
        "email": "whaibela@smh.com.au",
        "phone": "+993 543 264 8329",
        "date_of_birth": "14/5/1967",
        "photo": "https://randomuser.me/api/portraits/women/58.jpg"
    },
    {
        // "id": "10",
        "first_name": "Storm",
        "last_name": "McDoual",
        "gender": "Male",
        "email": "smcdoual9@xinhuanet.com",
        "phone": "+62 812 411 6218",
        "date_of_birth": "18/8/1968",
        "photo": "https://randomuser.me/api/portraits/men/75.jpg"
    }
].map(student => {
    return {
        id: uuidv4(),
        first_name: student["first_name"],
        last_name: student["last_name"],
        gender: student["gender"],
        email: student["email"],
        phone: student["phone"],
        date_of_birth: student["date_of_birth"],
        photo: student["photo"]
    }
});

export default studentData