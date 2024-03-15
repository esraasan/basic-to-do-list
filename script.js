// Kullanıcı arayüzü değişkenleri
const form = document.querySelector('form'); // Form elementi
const input = document.querySelector('#txtTaskName'); // Görev giriş inputu
const btnDeleteAll = document.querySelector('#btnDeleteAll'); // Tüm görevleri silme butonu
const taskList = document.querySelector('#task-list'); // Görev listesi ul elementi

// Olay dinleyicilerini çağırma
eventListeners();

function eventListeners() {
    // Form gönderim olayı
    form.addEventListener('submit', addNewItem);

    // Bir öğeyi silme
    taskList.addEventListener('click', deleteItem);

    // Tüm öğeleri silme
    btnDeleteAll.addEventListener('click', deleteAllItems);
}

// Yeni bir öğe ekleme işlevi
function addNewItem(e) {
    if (input.value === '') {
        alert('Ekleme alanını boş bıraktınız. Liste boş görünecek.');
    }

    // li oluşturma
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(input.value));

    // a oluşturma
    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    // a'yı li'ye ekleme
    li.appendChild(a);

    // li'yi ul'ye ekleme
    taskList.appendChild(li);

    // inputu temizleme
    input.value = '';

    e.preventDefault();
}

// Bir öğeyi silme işlevi
function deleteItem(e) {
    if (confirm('Silmek istediğinize emin misiniz?')) {
        if (e.target.className === 'fas fa-times') {
            e.target.parentElement.parentElement.remove();
        }
    }
    e.preventDefault();
}

// Tüm öğeleri silme işlevi
function deleteAllItems(e) {
    if (confirm('Hepsini silmek istediğinize emin misiniz?')) {
        // taskList.innerHTML='';
        taskList.childNodes.forEach(function (item) {
            if (item.nodeType === 1) {
                item.remove();
            }
        });
    }
    e.preventDefault();
}
