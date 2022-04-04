import json
import random

data = [] # store dictionaries of data

# dummy data to randomly be pulled from to build json file
first_names = ["Michael", "Christopher", "Jessica", "Matthew", 
"Ashley", "Jennifer", "Joshua", "Amanda", "Daniel", "David", "James", 
"Robert", "John", "Joseph", "Andrew", "Ryan", "Brandon", "Jason", "Justin",
"Sarah", "William", "Jonathan", "Stephanie", "Brian", "Nicole", "Nicholas",
"Anthony", "Heather", "Eric", "Elizabeth","Adam", "Megan", "Melissa", "Kevin"]
last_names = ["Elsher", "Solace", "Levine", "Thatcher", "Raven", "Bardot", "St. James",
"Hansley", "Cromwell", "Ashley", "Collymore", "Stoll", "Verlice", "Adler",
"Huxley", "Ledger", "Hayes", "Ford", "Finnegan", "Beckett"]
address_streets = ["Second", "Third", "First", "Fourth", "Park", "Fifth", "Main",
"Sixth", "Oak", "Seventh", "Pine", "Maple", "Cedar", "Eigth", "Elm", "View", 
"Washington", "Ninth", "Lake", "Hill"]
road_types = ["Road", "Way", "Street", "Avenue", "Boulevard", "Lane", "Drive",
"Terrace", "Place", "Court"]
cities = ["New York", "Austin", "San Francisco", "Chicago", "Seattle", "Boston",
"New Orleans", "Washington, D.C.", "Los Angeles", "Denver", "Nashville", 
"Portland", "San Diego", "Miami", "Charleston", "Philadelphia", "San Antonio"]
email_domains = ["gmail", "hotmail", "yahoo", "icloud"]
qualifications = ["new", "mid-level", "senior"]
handson_experience = ["familiar", "inexperienced", "expert"]
hobbies = ["hiking", "gaming", "socializing", "reading", "basketball", "fishing", "swimming", "football"]
remarks = ["great interview", "very qualified", "natural speaker", "shaky but potential", "not this time"]

for i in range(1,10002):
    data_dict = {}
    data_dict["S_No"] = i
    first_name = random.choice(first_names)
    data_dict["First_Name"] = first_name
    data_dict["Last_Name"] = random.choice(last_names)
    address_no = random.randrange(10,99999)
    address = str(address_no) + " " + random.choice(address_streets) + " " + random.choice(road_types)
    data_dict["Address"] = address
    data_dict["City"] = random.choice(cities)
    data_dict["Zip_Code"] = random.randrange(10000, 99999)
    data_dict["Contact_No"] = random.randrange(1000000000, 9999999999)
    email = first_name + "@" + random.choice(email_domains) + ".com"
    data_dict["Email_Address"] = email
    data_dict["Qualifications"] = random.choice(qualifications)
    data_dict["HandsOn_Experience"] = random.choice(handson_experience)
    data_dict["Hobbies"] = random.choice(hobbies)
    data_dict["Remarks"] = random.choice(remarks)
    data.append(data_dict)

json_object = json.dumps(data, indent=2)

with open("data.json", "w") as outfile:
    outfile.write(json_object)
