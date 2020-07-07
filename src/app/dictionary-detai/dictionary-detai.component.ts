import {Component, OnDestroy, OnInit} from '@angular/core';
import {DictionaryService, IWord} from '../dictionary.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-dictionary-detai',
  templateUrl: './dictionary-detai.component.html',
  styleUrls: ['./dictionary-detai.component.css']
})
export class DictionaryDetaiComponent implements OnInit, OnDestroy {

  word: IWord;
  sub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dictionaryService: DictionaryService
  ) { }

  ngOnInit(): void {
/*    const {snapshot} = this.activatedRoute;
    const key = snapshot.paramMap.get('key');
    const meaning = this.dictionaryService.search(key);
    this.word = {
      key: key,
      meaning: meaning
    }*/
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) =>{
      const key = paramMap.get('key');
      const meaning = this.dictionaryService.search(key);
      this.word = {
        key: key,
        meaning: meaning
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
