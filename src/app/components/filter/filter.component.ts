import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() tags: string[] = [];
  @Output() change: EventEmitter<string[]> = new EventEmitter();

  tagsMap: Map<string, boolean> = new Map([["all", true]]);
  tagsMapKeys: string[] = [];

  constructor() { }

  ngOnInit(): void {
    for (const tag of this.tags) {
      this.tagsMap.set(tag, false);
      this.tagsMapKeys = Array.from(this.tagsMap.keys());
    }
    this.change.emit([...this.tags]);

  }

  changeTagState(tag: string) {
    if (tag == "all") {
      for (const t of this.tagsMap.keys()) {
        this.tagsMap.set(t, false);
      }
    } else {
      this.tagsMap.set("all", false);
    }

    this.tagsMap.set(tag, !this.tagsMap.get(tag)!);

    let allSelected = true;
    let nothingSelected = true;
    for (const tag of this.tags) {
      allSelected = allSelected && this.tagsMap.get(tag)!;
      nothingSelected = nothingSelected && !this.tagsMap.get(tag)!;
    }

    if (allSelected || nothingSelected) {
      for (const t of this.tagsMap.keys()) {
        this.tagsMap.set(t, false);
      }
      this.tagsMap.set("all", true);
    }
    if(this.tagsMap.get("all")) {
      this.change.emit([...this.tags]);
    } else {
      this.change.emit(Array.from(this.tagsMap.entries()).filter(e => e[1]).map(e => e[0]));
    }
  }

}
