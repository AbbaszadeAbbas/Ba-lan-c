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

print(e_mail.split("IS"));     # expected output: ['coding', 'best'];



# # # #     list()  method

# bu metoddan list yaratmaq ucun istifade olunur

numbers = list(range(1,11));

print(numbers);     # expected output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
