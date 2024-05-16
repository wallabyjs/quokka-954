import { merge, interval } from 'rxjs';

{
  {
    const one$ = interval(1500);
    const two$ = interval(1000);
    const merged$ = merge(one$, two$);
    merged$.subscribe((z) => console.log(z));
  }
}