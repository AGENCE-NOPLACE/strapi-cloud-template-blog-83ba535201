import type { Schema, Struct } from '@strapi/strapi';

export interface ExpertisesAvantages extends Struct.ComponentSchema {
  collectionName: 'components_expertises_avantages';
  info: {
    displayName: 'avantages';
  };
  attributes: {
    items: Schema.Attribute.Component<'expertises.items', true>;
    titre: Schema.Attribute.String;
  };
}

export interface ExpertisesFournisseurs extends Struct.ComponentSchema {
  collectionName: 'components_expertises_fournisseurs';
  info: {
    displayName: 'fournisseurs';
  };
  attributes: {
    slider: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    titre: Schema.Attribute.String;
  };
}

export interface ExpertisesItemType extends Struct.ComponentSchema {
  collectionName: 'components_expertises_item_types';
  info: {
    displayName: 'item_type';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface ExpertisesItems extends Struct.ComponentSchema {
  collectionName: 'components_expertises_items';
  info: {
    displayName: 'items';
  };
  attributes: {
    chiffres: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ExpertisesItemsMode extends Struct.ComponentSchema {
  collectionName: 'components_expertises_items_modes';
  info: {
    displayName: 'items_mode';
  };
  attributes: {
    details: Schema.Attribute.Text;
    etape: Schema.Attribute.Integer;
    titre: Schema.Attribute.String;
  };
}

export interface ExpertisesLeft extends Struct.ComponentSchema {
  collectionName: 'components_expertises_lefts';
  info: {
    displayName: 'left';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    titre: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ExpertisesMode extends Struct.ComponentSchema {
  collectionName: 'components_expertises_modes';
  info: {
    displayName: 'Mode';
  };
  attributes: {
    items: Schema.Attribute.Component<'expertises.items-mode', true>;
    titre: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ExpertisesPrime extends Struct.ComponentSchema {
  collectionName: 'components_expertises_primes';
  info: {
    displayName: 'prime';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    logo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    titre: Schema.Attribute.String;
  };
}

export interface ExpertisesTypes extends Struct.ComponentSchema {
  collectionName: 'components_expertises_types';
  info: {
    displayName: 'types';
  };
  attributes: {
    items: Schema.Attribute.Component<'expertises.item-type', true>;
    titre: Schema.Attribute.String;
  };
}

export interface OffreOffre extends Struct.ComponentSchema {
  collectionName: 'components_offre_offres';
  info: {
    displayName: 'offre';
  };
  attributes: {
    active: Schema.Attribute.Boolean;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    pourcentage: Schema.Attribute.Decimal;
    titre: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'expertises.avantages': ExpertisesAvantages;
      'expertises.fournisseurs': ExpertisesFournisseurs;
      'expertises.item-type': ExpertisesItemType;
      'expertises.items': ExpertisesItems;
      'expertises.items-mode': ExpertisesItemsMode;
      'expertises.left': ExpertisesLeft;
      'expertises.mode': ExpertisesMode;
      'expertises.prime': ExpertisesPrime;
      'expertises.types': ExpertisesTypes;
      'offre.offre': OffreOffre;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
