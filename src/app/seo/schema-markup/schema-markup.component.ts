import { Component } from '@angular/core';

@Component({
  selector: 'app-schema-markup',
  templateUrl: './schema-markup.component.html',
  styleUrls: ['./schema-markup.component.scss']
})
export class SchemaMarkupComponent {
  schema = {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    url: 'https://warmehaus.com.by/',
    name: 'Warmehaus Minsk Gmbh.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+375 (29) 352-32-04',
      contactType: 'Консультация и рассчет стоимости'
    }
  };
}
