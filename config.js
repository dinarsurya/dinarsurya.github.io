var config = {
    style: 'mapbox://styles/dinarsuryan/clkl8pcbq00hg01pcgkkebva1',
    accessToken: 'pk.eyJ1IjoiZGluYXJzdXJ5YW4iLCJhIjoiY2xobjBmOTVoMWhrZTNucXBkdTl2OXkxdyJ9.mplYYy_H8T0wmjlcJOGK7Q',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    chapters: [
        {
            id: 'item-main',
            alignment: 'main-list',
            hidden: false,
            title: 'Latar Belakang',
            description: `
                <p>
                    Menurut Undang-Undang nomor 11 tahun 2010, benda cagar budaya membutuhkan upaya pelestarian agar terlindungi dan keberadaannya tetap terjaga. Upaya pelestarian situs cagar budaya dapat dilakukan, salah satunya dengan pembuatan sistem informasi bangunan berbasis story maps dengan cara pendokumentasian dan inventarisasi sehingga diketahui keaslian bentuk, lokasi, tekstur dan struktur benda cagar budaya. Namun seiring dengan berkembangnya zaman, cerita sejarah dianggap sebagai sesuatu yang membosankan dan tidak menarik. Oleh karena itu, story map ini dibuat sebagai media untuk memvisualisasikan cerita sejarah agar lebih menarik. Story Maps ini berisi mengenai lokasi bangunan dan informasi pendukung. Story Maps ini juga dilengkapi dengan foto/dokumentasi objek yang didukung dengan pemodelan 3D untuk membantu pengguna memahami bangunan, cerita dan memberikan kemudahan kepada pengguna untuk melihat pemandangan lokasi serta bentuk candi.
                </p>

            `,
            model: null,
            scale: null,
            location: {
                center: [110.469498, -7.757892],
                zoom: 14,
                pitch: 60,
                bearing: 0
            },
            rotation: {
                x: 0,
                y: 0,
                z: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'item-1',
            alignment: 'list-card',
            hidden: false,
            title: 'Bagian 1 - Candi Sari',
            image: 'images/Sari.JPG',
            description: `
                <p>
                    Candi Sari adalah candi atau asrama bagi para pendeta. Berdasarkan bentuk atapnya yang berbentuk stupa, dapat disimpulkan bahwa Candi Sari adalah agama Buddha. Berdasarkan desain dekoratif ukiran yang sangat halus, dapat diperkirakan bahwa candi Sari dibangun pada masa yang sama dengan candi Kalasan, yaitu sekitar abad ke-8 Masehi. Candi Sari dipugar pada tahun 1929-1930 oleh Kantor Purbakala Hindia Belanda 
                </p>

                <p>
                    Ruangan Candi Sari diperkirakan terbagi menjadi dua, yaitu. bagian atas dan bawah. Pemisahan ruangan atas dan bawah dengan kayu. Setiap bagian atas memiliki atap miring dan permukaan samping yang miring ke atas. Juga, setiap ruang atas memiliki dua relung biasa di sisi utara dan selatan. Kemungkinan arca ini adalah Buddha yang diapit oleh dua Bodhisattva. Pembagian ketiga ruangan tersebut dapat dilihat dari tiang-tiang di tingkat bawah, relung-relung hias di tingkat atas, dan tiga atap besar.
                </p>
            `,
            model: 'https://dinarsurya.github.io/3D/Sari/Sari.gltf',
            scale: 3,
            locatioObj: [110.47407, -7.76115],
            location: {
                center: [110.47428103950577, -7.761219359027983],
                zoom: 18,
                pitch: 60,
                bearing: 0
            },
            rotation: {
                x: 0,
                y: 0,
                z: 270
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'item-2',
            alignment: 'list-card',
            hidden: false,
            title: 'Bagian 2 - Candi Kedulan',
            image: 'images/Kedulan.JPG',
            description: `
                <p>
                    Candi Kedulan terletak di Dusun Kedula, Desa Tirtomartan, Kecamatan Kalasan, Sleman, Daerah Istimewa Yogyakarta, dengan ketinggian 168,45 meter di atas permukaan laut. . Berdasarkan hasil survei stratigrafi, candi Kedulan diselimuti lahar setebal 8 meter yang terdiri dari 15 lapisan sedimen. Mereka menemukan susunan balok di kedalaman tiga meter. Seorang pekerja bernama Sriyanto, yang tinggal di Jogonalan, Wanabaya, Klaten, melaporkan hasilnya ke Balai Pelestarian Cagar Budaya Daerah Istimewa Yogyakarta.
                </p>

                <p>
                    Pada tanggal 15 hingga 24 November 1993, ekskavasi penyelamatan dilakukan di Candi Kedulan oleh Balai Pelestarian Cagar Budaya Daerah Istimewa Yogyakarta bekerja sama dengan jurusan arkeologi Fakultas Ilmu Budaya Universitas Gadjah Mada. Tujuannya adalah untuk melindungi dan mendokumentasikan data arkeologi agar tidak rusak akibat aktivitas manusia dan lingkungan, serta mengungkapkan fakta-fakta tentang Candi Kedulan.
                </p>
            `,
            model: 'https://dinarsurya.github.io/3D/Kedulan/Kedulan.gltf',
            scale: 500,
            locatioObj: [110.46933, -7.74247],
            location: {
                center: [110.46969789532558, -7.742360002737333],
                zoom: 18,
                pitch: 60,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            rotation: {
                x: 0,
                y: 0,
                z: 270
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'item-3',
            alignment: 'list-card',
            hidden: false,
            title: 'Bagian 3 - Candi Kalasan',
            image: 'images/Kalasan.JPG',
            description: `
                <p>
                    Candi Kalasan berlokasi di Dusun Kalibening, Desa Tirtomartani, Kecamatan Kalasan, Kabupaten Sleman, Daerah Istimewa Yogyakarta. Candi Kalasan menghadap ke arah timur dan didirikan menggunakan material batu andesit. Walaupun tidak ditemukan jejak desa sebagai permukiman, temuan di situs Candi Kalasan mengisyaratkan adanya struktur tempat tinggal atau biara bagi para pendeta dan pengelola candi dalam kawasan upacara.
                </p>

                <p>
                    Candi Kalasan, meski belum selesai dipugar, terutama pada bagian atapnya, tetap memperlihatkan keindahan fisik dan dekorasi yang luar biasa. Candi ini berdiri di atas alas berbentuk bujur sangkar berukuran 45 x 45 meter dengan tinggi keseluruhan 24 meter dan terdiri dari tiga bagian: kaki, badan, dan atap. Relief hias di kaki menggambarkan vas dan tentakel sebagai simbol kekayaan. Di sisi selatan terdapat relief kepala ikan yang dihiasi dengan ornamen yang berasal dari pohon dewa, benda langit, dan alat musik. Bagian atap Candi Kalasan rusak parah, tetapi deskripsi van Romondt menggambarkan struktur dengan dua prisma segi delapan di tengah atap dan empat atap individu.
                </p>
            `,
            model: 'https://dinarsurya.github.io/3D/Kalasan/Kalasan.gltf',
            scale: 1.5,
            locatioObj: [110.47202, -7.76753],
            location: {
                center: [110.47237195299788, -7.767060753769619],
                zoom: 18,
                pitch: 60,
                bearing: 0
            },
            rotation: {
                x: 0,
                y: 0,
                z: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'item-4',
            alignment: 'list-card',
            hidden: false,
            title: 'Bagian 4 - Candi Sambisari',
            image: 'images/Sambisari.JPG',
            description: `
                <p>
                    Candi Sambisari terletak di Dusun Sambisari, Desa Purwomartan, Kalasan, Sleman, Daerah Istimewa Yogyakarta. Perkiraan tanggal pendirian candi ini didasarkan pada berbagai analisis. Menggunakan bahan jalan setapak, struktur candi Sambisari kemungkinan serupa dengan candi-candi seperti Prambanan, Plaosan, dan Sojiwan, yang berasal dari abad ke-8 hingga ke-11 Masehi. Candi induk menghadap ke barat, memiliki ukuran 13,65 x 13,65 meter, dan tingginya mencapai 7,5 meter
                </p>

                <p>
                    Candi Sambisari memiliki keunikan pada bagian interior candi utama yaitu terdapat yoni siraman besar yang menghadap ke utara dengan hiasan berbentuk naga di bawahnya. Di atas ketiga candi tersebut hanya terdapat alas dan pagar, tanpa rangka atau atap. Candi-candi pembantu bagian tengah dan utara memiliki alas padmasan berbentuk bujur sangkar, sedangkan candi perwara bagian selatan tidak. Seluruh areal kompleks candi Sambisar dikelilingi pagar batu putih berukuran 50 x 48 meter. Candi Sambisari memiliki focal point yang menarik tepat di sebelah selatan tangga masuk. Candi ini ditemukan pada tahun 1966 oleh seorang petani bernama Arjo Wiyono saat mengolah tanah pertaniannya. Penggalian arkeologi dilakukan pada tahun 1975, di mana terungkap bahwa candi Sambisar terdiri dari satu candi induk dan tiga candi pembantu. Candi-candi ini dalam keadaan runtuh dan berada kurang lebih 6,5 meter di bawah tanah.
                </p>
            `,
            model: 'https://dinarsurya.github.io/3D/sambisarii/Sambisarii.gltf',
            scale: 5,
            locatioObj: [110.44605, -7.76293],
            location: {
                center: [110.44699447998208, -7.7622571207001485],
                zoom: 18,
                pitch: 60,
                bearing: 0
            },
            rotation: {
                x: 0,
                y: 0,
                z: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
