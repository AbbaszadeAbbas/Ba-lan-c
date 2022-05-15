# print("Let's GO!");

# # # # #     f'string

# bu metoddan stringe basqa stringi elave etmek ucun istifade olunur

# name = 'dunya';
# message = f"merhaba  {name}";
# print(message)   # expected output: merhaba  dunya

# # # # #     format() method

# bu metoddan stringe basqa stringi elave etmek ucun istifade olunur

# name = "Abbas";
# message = "adim:{}";
# print(message.format(name))  # expected output: adim:Abbas

# # # # #     len() method

# bu metoddan verilen stringdeki soz( ve ya sozlerin ) uzunlugunu olcmek ucun istifade olunur

# name = "Abbas";
# print(len(name));    #expected output: 5
# print(name[1]);      # burda kvadrat moterzenin icerisine , cap etdirmek istediyin simvolun indeksini daxil etmek lazimdir
# print(name[1:3])     # burda kvadrat moterzenin icerisine , cap etdirmek istediyin simvollarin 1cisi ile axrincisinin indeksini elave etmek lazimdir indeksini daxil etmek lazimdir    Qeyd: 2ci yazilan indeks axrinci cap edilmesi teleb olunan simvoldan 1 sonraki olmalidir.Yeni eger 1ci 2ci ve 3cu simvollari cap etdirmek lazimdirsa o zaman print(name[1:(lazim olan axrinci simvolun index i + 1)4])

# # # # #     title() method

# bu metoddan stringdeki sozlerin bas herfini boyutmek ucun istifade olunur.

# name = "hello world";
# print(name.title())    #expected output: Hello World

# # # # #     upper() method

# bu metoddan verilen stringdeki herflerin hamisini boyutmek ucun istifade olunur.

# name = "python learning";
# print(name.upper())    #expected output: PYTHON LEARNING

# # # # #     lower() method

# bu metoddan verilen stringdeki herflerin hamisini kiciltmek ucun istifade olunur.

# name = "PYTHON LEARNING";
# print(name.lower())    #expected output:python learning


# # # # #     count() method

# bu metod vasitesi ile verilen stringde isteyiniz simvolun nece defe islendiyini oyrene bilersiniz.

# name = "terekeme";
# print(name.count("e"));


# # # # #     find() method

# bu metod vasitesi ile verilen stringde isteyiniz simvolun necenci index-de islendiyini oyrene bilersiniz.

# name = "terekeme";
# print(name.find("t"));


# # # # #     replace() method

# bu metod vasitesi ile verilen stringde isteyiniz simvolu basqa simvolla evez ede bilersiniz.

# name = "terekeme";
# print(name.replace("e", " "));