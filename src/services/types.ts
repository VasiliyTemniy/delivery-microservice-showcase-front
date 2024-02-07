export type APIResponse<T> = {
  success: boolean
  content: T;
  status?: number;
};


export type SpringPage<T> = {
  content: T[],
  pageable: {
    pageNumber: number,
    pageSize: number,
    sort: {
      empty: boolean,
      sorted: boolean,
      unsorted: boolean
    },
    offset: number,
    paged: boolean,
    unpaged: boolean
  },
  last: boolean,
  totalPages: number,
  totalElements: number,
  size: number,
  number: number,
  sort: {
    empty: boolean,
    sorted: boolean,
    unsorted: boolean
  },
  numberOfElements: number,
  first: boolean,
  empty: boolean
};

type MapToDto<T> = {
  -readonly [Property in keyof T]:
  T[Property] extends Date ? string :
  T[Property] extends (Date | undefined) ? (string | undefined) :
  T[Property]
};

export type DeliveryMeta = {
  cost?: number,
  estimatedDeliveryMs?: BigInt
};

export type DeliveryMetaDto = MapToDto<DeliveryMeta>;


export type OrderTracking = {
  id?: string,
  orderId: string,
  pointNumber: number,
  fromFacilityId: string,
  destinationId: string,
  destinationType: string,
  carrierId: string,
  status: string,
  deliveryCost: number,
  currency: string,
  currencyDecimalMultiplier: number,
  massControlValue?: number,
  massMeasure?: string,
  estimatedDeliveryAt?: Date,
  deliveredAt?: Date,
  createdAt?: Date,
  updatedAt?: Date
};

export type OrderTrackingDto = MapToDto<OrderTracking>;