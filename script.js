// #1
const numbers = [100, 101, 102, 103];

for (var i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    let indexEl = i;
  setTimeout(function() {
    console.log('Index: ' + indexEl + ', element: ' + number);
  }, (i + 1) * 1000);
}


// #2
const numbers = [100, 101, 102, 103]

numbers.forEach(function(el, i) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + el)
  }, (i + 1) * 1000)
})




// #2
const items = [
    { 
        value: 'child_1',
        parents: [{
            value: 'parent_1',
            parents: [{
                value: 'grandparent_1',
                parents: [],
            }],
        },
        {
            value: 'parent_2',
            parents: [{
                value: 'grandparent_2',
                parents: [{
                    value: 'grandgrandparent_2',
                    parents: null,
                }],
            }],
        }],
    },
    { 
        value: 'child_2',
        parents: null,
    }
];

function func(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr [i] == 'object') {
            console.log(arr[i].value);
        } else {
            arr [i] = func(arr[i]);
        }
    }
    return arr;
}

func(items);
// не понятно как получить значения из вложенных объектов
