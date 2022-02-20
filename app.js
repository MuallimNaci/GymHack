var posts = 
[
    {
        id:1,
        title:"Protein tozu nedir",
        desc:"Vücudun temel ihtiyaçlarından biri olan protein, hücre gelişimini destekleyen, kansızlık oluşumunu engelleyen, vücut direncini ve kas dokusunu güçlendiren temel bir besindir.",
        date:"20.02.2022 16:30",
        img:"resimler/brodein.jpg",
        category:"Supplement"
        
    },
    {
        id:2,
        title:"Bcaa tozu nedir",
        desc:" BCAA’ların kasların aldığı hasarı azaltmaya yardımcı olduğu ve dolayısıyla bu ağrıların süresini ve şiddetini de azaltabildiğini söyleyebiliriz.",
        date:"20.02.2022 16:31",
        img:"resimler/bcaa.jpg",
        category:"Supplement"
    },
    {
        id:3,
        title:"Deadlift nedir",
        desc:"Deadlift bir eğilme biçimidir ve eğilerek yerden belli bir miktarda ağırlık kaldırılarak uygulanır. Kalça kaslarını, sırt kaslarını ve trapezleri yoğun olarak çalıştırır.",
        date:"20.02.2022 16:32",
        img:"resimler/deadlift.jpg",
        category:"Antrenman"
    },
    {
        id:4,
        title:"Tdee nedir",
        desc:"Toplam günlük enerji harcaması demektir. Enerji yani kalori ‘iş yapabilme veya ortaya koyabilme yeteneği’ olarak tanımlanır.",
        date:"20.02.2022 16:33",
        img:"resimler/tdee.jpg",
        category:"Besin"
    },
    {
        id:5,
        title:"Crossfit nedir",
        desc:"Üç farklı branşta spor antrenmanlarını barındırır: Temel jimnastik, kondisyon ve olimpik halter egzersizleri! Çünkü crossfit metodu, insanın fonksiyonel bir canlı olduğunu savunur. Bu bağlamdan yola çıkarak; dayanıklılık, güç, esneklik, koordinasyon, hız, denge, isabetlilik ve çeviklik gibi birçok farklı fonksiyonu bir arada geliştirmeyi amaçlar.",
        date:"20.02.2022 16:34",
        img:"resimler/crossfit.jpg",
        category:"Antrenman"
    },
    {
        id:6,
        title:"Makro Besinler nelerdir",
        desc:"Diyetin temel bileşenleri olan makro besinler yağ, protein ve karbonhidratlardır. Bunlar ya vücudun yapı taşları ve onarım materyali ya da onu çalıştırmak için gereken enerji kaynağıdır.",
        date:"20.02.2022 16:35",
        img:"resimler/makro.png",
        category:"Besin"
    },
]

let content_body = document.querySelector(".content-body")
let select = document.getElementById("mySelect")

// Default olarak bütün postları getir
function AddPostOnUI() {
    let writing = ""
    posts.map((e)=>{
        writing += schema(e)
    })
    content_body.innerHTML = writing
}
AddPostOnUI()


// Kategoriye göre listeleme
function listPostCategory()
{
    if(select.value == "0")
    {
        
       let writing = ""
       posts.map((e)=>{
       
            writing += schema(e)
        
    })
       content_body.innerHTML = writing
    }

    else if(select.value == "1")
    {
        
       let writing = ""
       posts.map((e)=>{
        if (e.category == "Antrenman") {
            writing += schema(e)
        }
    })
       content_body.innerHTML = writing
    }

    else if(select.value == "2")
    {
        
       let writing = ""
       posts.map((e)=>{
        if (e.category == "Besin") {
            writing += schema(e)
        }
    })
       content_body.innerHTML = writing
    }

    else if(select.value == "3")
    {
        
       let writing = ""
       posts.map((e)=>{
        if (e.category == "Supplement") {
            writing += schema(e)
        }
    })
       content_body.innerHTML = writing
    }
}

// Post şeması oluşturma
function schema(item) {
    let post = `
                    <div class="col-6 mt-5 mb-5">
                        <div class="card h-100">
                            <a href="#"><img src="${item.img}" class="card-img-top" alt="..."></a>
                        <div class="card-body">
                            <a href="#"><h5 class="card-title">#${item.id} ${item.title}</h5></a>
                            <a href="#"><p class="card-text">${item.desc}</p></a>
                        </div>
                        <div class="card-footer">
                        <a href="#"><small class="text-muted">${item.date}</small></a>
                         </div>
                    </div>
                </div>
            `
    return post
}

