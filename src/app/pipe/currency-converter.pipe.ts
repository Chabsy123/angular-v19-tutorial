import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter'
  // when you want to use the pipe,you must use this name but it has to be imported into the component.ts file of where you wish to use it;
})
export class CurrencyConverterPipe implements PipeTransform {

  /**
   * Custom pipe to convert a number (e.g., USD) to another currency.
   *
   * @param value The original amount (e.g., 100 USD)
   * @param args An optional multiplier (e.g., exchange rate)
   *
   * If no rate is passed via args, it defaults to multiplying by 1600 (e.g., NGN).
   */
  transform(value: number, ...args: number[]): number {
    console.log(args); // Useful for debugging passed arguments

    if (args.length > 0) {
      const [rate] = args;
      return value = rate * 10; // Converts using provided multiplier logic
    } else {
      return value * 1600; // Default conversion rate to NGN
    }
  }
}
