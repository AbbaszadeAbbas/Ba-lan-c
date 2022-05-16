# # # # #     len() method

# bu metoddan verilen stringdeki soz( ve ya sozlerin ) uzunlugunu olcmek ucun istifade olunur

name = "Abbas";
print(len(name));    #expected output: 5
print(name[1]);      # burda kvadrat moterzenin icerisine , cap etdirmek istediyin simvolun indeksini daxil etmek lazimdir
print(name[1:3])     # burda kvadrat moterzenin icerisine , cap etdirmek istediyin simvollarin 1cisi ile axrincisinin indeksini elave etmek lazimdir indeksini daxil etmek lazimdir    Qeyd: 2ci yazilan indeks axrinci cap edilmesi teleb olunan simvoldan 1 sonraki olmalidir.Yeni eger 1ci 2ci ve 3cu simvollari cap etdirmek lazimdirsa o zaman print(name[1:(lazim olan axrinci simvolun index i + 1)4])