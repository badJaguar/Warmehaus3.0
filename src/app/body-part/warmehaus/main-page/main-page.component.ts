import { Component, OnInit } from '@angular/core';
import { ITile } from '../../../../models/ITile.interface';
import { CanonicalService } from '../../../../services/canonical.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private metaService: CanonicalService) { }

  breakpoint: number;
  warmehausTiles: ITile[] = [
    {
      route: '/warmehaus/mat-160Watt',
      picUrl: 'assets/images/main-page-pics/warmehaus/mat-160Watt.jpg',
      cols: 2,
      rows: 1,
      alt: 'Нагревательный мат 160 Вт',
      description: 'Тонкий двужильный нагревательный мат на сетке, с шагом кабеля 7см...',
    },
    {
      route: '/warmehaus/mat-200Watt',
      picUrl: 'assets/images/main-page-pics/warmehaus/WARME_FLOOR_WARMEHAUS_MAT_200W_4_s800_4.jpg',
      cols: 2,
      rows: 1,
      alt: 'Нагревательный мат 200 Вт',
      description: 'Готовая к применению нагревательная система ТЕПЛЫЙ ПОЛ повышенной...',
    },
    // {
    //   route: '/warmehaus/cable-11Watt',
    //   picUrl: 'assets/images/main-page-pics/warmehaus/Heating_Cable_To_Layer_11W.jpg',
    //   cols: 2,
    //   rows: 1,
    //   alt: 'Нагревательный Кабель 11Вт'
    // },

    {
      route: '/warmehaus/cable-14Watt',
      picUrl: 'assets/images/main-page-pics/warmehaus/WARMEHAUS-CAB-14W-2-s-400-1.jpg',
      cols: 2,
      rows: 1,
      alt: 'Нагревательный Кабель 14Вт',
      description: 'Разработан для основного отопления любых помещений, в т.ч. жилых...',
    },
    {
      route: '/warmehaus/cable-20Watt',
      picUrl: 'assets/images/main-page-pics/warmehaus/WARM_FLOOR_WARMEHAUS_CAB_20W_UV_3_s_800.jpg',
      cols: 2,
      rows: 1,
      alt: 'Нагревательный Кабель в стяжку 20Вт',
      description: 'Укладывается в бетонный пол и применяется на том этапе строительства...',
    },
    {
      route: '/warmehaus/films',
      picUrl: 'assets/images/main-page-pics/warmehaus/warmehaus_thermofilm_1m.jpg',
      cols: 2,
      rows: 1,
      alt: 'Инфракрасная пленка',
      description: 'Infrared Film применяется под сухие финишные покрытия, на том этапе...',
    },
    {
      route: '/warmehaus/anti-icing',
      picUrl: 'assets/images/main-page-pics/warmehaus/roof-wire.jpg',
      cols: 2,
      rows: 1,
      alt: 'Системы антиобледенения',
      description: 'Готовые к использованию комплекты WÄRMEHAUS® AntiFreeze Guard, ...'
    },
    {
      route: '/warmehaus/termostats',
      picUrl: 'assets/images/main-page-pics/warmehaus/7dde2feaea7027829f0f8f34960bdebb.jpg',
      cols: 2,
      rows: 1,
      alt: 'Терморегуляторы',
      description: 'Терморегуляторы для всех видов электрических систем обогрева пола.'
    },
  ];
  ngOnInit() {
    this.metaService.createCanonicalURL();
  }
}
