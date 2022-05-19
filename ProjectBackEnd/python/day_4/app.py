# # # #     append() method

# bu metoddan verilen listin axrina yeni element daxil etmek ucun istifade olunur.

cities = ['Baki','Gence','Mingecevir'];
print(cities);   # expected output: ['Baki', 'Gence', 'Mingecevir']

cities.append("Sumqayit");

print(cities);   # expected output: ['Baki', 'Gence', 'Mingecevir', 'Sumqayit']


# # # #     insert() method

# bu metoddan verilen listin istenilen yerine yeni element daxil etmek ucun istifade olunur.

cities = ['Baki','Gence','Mingecevir'];
print(cities);   # expected output: ['Baki', 'Gence', 'Mingecevir']

cities.insert(2,"Sumqayit");   #1ci daxil edilen eded daxil edilecek elementin yerini bildirir.

print(cities);   # expected output: ['Baki', 'Gence', 'Sumqayit', 'Mingecevir']


# # # #     del  method

# bu metoddan verilen listin icerisindeki hansisa elementi silmek ucun istifade olunur.

cities = ['Baki','Gence','Mingecevir'];
print(cities);   # expected output: ['Baki', 'Gence', 'Mingecevir'];

del cities[2]

print(cities);   # expected output: ['Baki', 'Gence'];


# # # #     pop()  method

# bu metoddan verilen listin icerisindeki sonuncu elementi silmek ucun istifade olunur.

cities = ['Baki','Gence','Mingecevir'];
print(cities);   # expected output: ['Baki', 'Gence', 'Mingecevir'];

cities.pop();

print(cities);   # expected output: ['Baki', 'Gence'];


# # # #     remove()  method

# bu metoddan verilen listin icerisindeki istenilen elementi silmek ucun istifade olunur.

cities = ['Baki','Gence','Mingecevir'];
print(cities);   # expected output: ['Baki', 'Gence', 'Mingecevir'];

cities.remove('Mingecevir');

print(cities);   # expected output: ['Baki', 'Gence'];


# # # #     sort()  method

# bu metoddan verilen listin icerisindeki istenilen elementleri elifba sirasina gore duzmek ucun istifade olunur.

countries = ["Russia" , "Azerbaijan" , "Greece" , "Poland"];
print(countries);   # expected output: ['Russia', 'Azerbaijan', 'Greece', 'Poland'];

countries.sort();

print(countries)   # expected output: ['Azerbaijan', 'Greece', 'Poland', 'Russia'];



# # # #     sum()  method

# bu metoddan verilen listin icerisindeki ededleri toplamaq ucun istifade olunur.

numbers = [1,2,3,4,5,6,7,8,9]

print(sum(numbers));   # expected output: 45