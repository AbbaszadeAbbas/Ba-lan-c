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