/*
        Написать запрос, который выводит общее число тегов
*/
print("tags count: ", JSON.stringify(db.tags.aggregate({$group: {_id :"id", tag_sum: {$sum : 1 }}})));
/*
        Добавляем фильтрацию: считаем только количество тегов woman
*/
print("woman tags count: ", JSON.stringify(db.tags.aggregate([{$match: {"name" : "woman"}},{$group: {_id :"id", tag_sum: {$sum : 1 }}}])));
/*
        Очень сложный запрос: используем группировку данных посчитать количество вхождений для каждого тега
        и напечатать top-3 самых популярных
*/

print("top 3 tags:",JSON.stringify(db.tags.aggregate([ 
                   {"$group": {_id :"$name", tag_sum: {$sum : 1 }}}
	,{$sort: { tag_sum: -1 } },{$limit: 3}])
));
