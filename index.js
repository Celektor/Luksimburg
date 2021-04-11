var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

    function init () {

        myMap = new ymaps.Map('map', {
        center: [56.660910, 124.706648], 
        zoom: 7,
        controls: ['typeSelector', 'fullscreenControl'],
        
        }, {
            restrictMapArea: [
                [55.957304, 122.163118],
                [61.526059, 130.608457]
            ]
        }),
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.8, 37.8]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Я тащусь',
                hintContent: 'Ну давай уже тащи'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true,
            
        }),
        myPieChart = new ymaps.Placemark([
            55.847, 37.6
        ], {
            // Данные для построения диаграммы.
            data: [
                {weight: 8, color: '#0E4779'},
                {weight: 6, color: '#1E98FF'},
                {weight: 4, color: '#82CDFF'}
            ],
            iconCaption: "Диаграмма"
        }, {
            // Зададим произвольный макет метки.
            iconLayout: 'default#pieChart',
            // Радиус диаграммы в пикселях.
            iconPieChartRadius: 30,
            // Радиус центральной части макета.
            iconPieChartCoreRadius: 10,
            // Стиль заливки центральной части.
            iconPieChartCoreFillStyle: '#ffffff',
            // Cтиль линий-разделителей секторов и внешней обводки диаграммы.
            iconPieChartStrokeStyle: '#ffffff',
            // Ширина линий-разделителей секторов и внешней обводки диаграммы.
            iconPieChartStrokeWidth: 3,
            // Максимальная ширина подписи метки.
            iconPieChartCaptionMaxWidth: 200
        });
        let ballo =  myMap.geoObjects
        .add(myGeoObject)
        .add(myPieChart)
        .add(new ymaps.Placemark([57.483756, 125.086713], {
            balloonContent: '<strong>Опасное место</strong>'
        }, {
            preset: 'islands#icon',
            iconColor: 'red'
        }))
        .add(new ymaps.Placemark([58.427748, 125.441826], {
            balloonContent: 'Белая гора'
        }, {
            preset: 'islands#circleIcon',
            iconColor: '#735184'
        }))
        .add(new ymaps.Placemark([57.470071, 125.045519], {
            balloonContent: 'ДТП'
        }, {
            preset: 'islands#dotIcon',
            iconColor: 'red'
        }))
        .add(new ymaps.Placemark([57.369824, 124.904786], {
            balloonContent: 'Река Хатыма'
        }, {
            preset: 'islands#circleIcon',
            iconColor: '#735184'
                       
        }))
        .add(new ymaps.Placemark([57.362228, 124.935575], {
            balloonContent: 'хороший вид'
        }, {
            preset: 'islands#circleIcon'
        }))
        .add(new ymaps.Placemark([59.007552, 126.197766], {
            balloonContent: 'место для кемпинга'
        }, {
            preset: 'islands#governmentCircleIcon',
            iconColor: '#735184'
        }))
        .add(new ymaps.Placemark([58.879220, 125.748791], {
            balloonContent: '<strong>Опасное место</strong>'
        }, {
            preset: 'islands#icon',
            iconColor: 'red'
        }))
        .add(new ymaps.Placemark([59.648639, 127.115259], {
            balloonContent: '<strong>Опасное место</strong>',
            hintContent: "one"
        }, {
            preset: 'islands#icon',
            iconColor: 'red'
        }));        
    };