// este arquivo javascript contém scripts personalizados para funcionalidades do site galarts

// galeria de imagens na página de detalhes do produto
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.querySelector('.main-image');

if (thumbnails.length > 0 && mainImage) {
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // atualiza a miniatura ativa
            document.querySelector('.thumbnail.active')?.classList.remove('active');
            thumbnail.classList.add('active');
            // atualiza a imagem principal
            mainImage.src = thumbnail.src;
        });
    });
}

// botões de quantidade nos produtos
const quantityBtns = document.querySelectorAll('.quantity-btn');
const quantityInput = document.querySelector('.quantity input');

if (quantityBtns.length > 0 && quantityInput) {
    quantityBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            let currentQuantity = parseInt(quantityInput.value);
            if (btn.textContent === '+') {
                quantityInput.value = currentQuantity + 1;
            } else if (btn.textContent === '-' && currentQuantity > 1) {
                quantityInput.value = currentQuantity - 1;
            }
        });
    });
}

// validação do formulário da newsletter
const newsletterForm = document.querySelector('.newsletter-form');
const newsletterToast = document.getElementById('newsletterToast');
const newsletterToastMsg = document.getElementById('newsletterToastMsg');
let toastInstance = null;
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        let msg = '';
        let success = false;
        if (!emailInput.value.trim()) {
            msg = "por favor, insira seu e-mail.";
        } else if (!isValidEmail(emailInput.value)) {
            msg = "por favor, insira um e-mail válido.";
        } else {
            msg = "obrigado por se inscrever na nossa newsletter!";
            success = true;
            this.reset();
        }
        if (newsletterToast && newsletterToastMsg) {
            newsletterToastMsg.textContent = msg;
            newsletterToast.classList.remove('text-bg-primary', 'text-bg-danger', 'text-bg-success');
            newsletterToast.classList.add(success ? 'text-bg-success' : 'text-bg-danger');
            if (!toastInstance) {
                toastInstance = new bootstrap.Toast(newsletterToast);
            }
            toastInstance.show();
        } else {
            alert(msg);
        }
    });
}

// função auxiliar para validar e-mail
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// função para alterar o layout dos cards de produto conforme o botão selecionado
const btnGroup = document.querySelector('.btn-group');
const rowDiv = document.querySelector('.product-list .row');
const labelSpan = document.querySelector('.d-flex.align-items-center.mb-4 span');
const layoutOptions = [
    { cols: 'row-cols-1', text: '1 por Linha' },
    { cols: 'row-cols-2', text: '2 por Linha' },
    { cols: 'row-cols-3', text: '3 por Linha' },
    { cols: 'row-cols-4', text: '4 por Linha' }
];
if (btnGroup && rowDiv && labelSpan) {
    btnGroup.querySelectorAll('button').forEach((btn, idx) => {
        btn.addEventListener('click', function () {
            // Remove classe active de todos
            btnGroup.querySelectorAll('button').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            // Atualiza texto
            labelSpan.textContent = layoutOptions[idx].text;
            // Atualiza classes de colunas
            rowDiv.classList.remove('row-cols-1', 'row-cols-2', 'row-cols-3', 'row-cols-4', 'row-cols-md-2', 'row-cols-lg-3', 'row-cols-xl-4');
            rowDiv.classList.add(layoutOptions[idx].cols);
        });
    });
}

(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
})()