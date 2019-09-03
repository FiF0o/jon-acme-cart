export const isPromoStrawberries = list =>
   list.filter(({ productCode }) => productCode === 'SR1').length >= 3

// import a FP library should we need to extend the rules - we use a closure for now to make it composable in the future
export const applyDiscount = (code, discountPrice) => (list) =>
   list.reduce((acc, item) => {
      const { price, productCode } = item
      return [
         ...acc,
         {
            ...item,
            price: productCode === code ? price - discountPrice : price
         }
      ]
   }, [])
