# # # #     index()  method

# bu metoddan verilen listin icerisindeki hansisa elementin indexini oyrenmek ucun istifade olunur.

cities = ["Sumqayit" , "Baki" , "Zengilan"];

print(cities.index("Sumqayit"));   # expected output: 0



# # # #     in  method

# bu metoddan verilen listin icerisindeki hansisa elementin olub-olmadigini yoxlamaq ucunn istifade olunur.

cities = ["Sumqayit" , "Baki" , "Zengilan"];

print("Sumqayit" in cities);   # expected output: True

print("London" in cities);     # expected output: False



# # # #     split()  method

# bu metod ile verilen stringdeki elementi istenilen 2 hisseye ayirmaq olar .

e_mail = 'codingISbest';

print(e_mail.split("IS"));     # expected output: ['coding', 'best']