import {
	Component,
	EventEmitter,
	Input,
	OnDestroy,
	OnInit,
	Output,
} from "@angular/core";
import { debounceTime, Subject, Subscription } from "rxjs";

@Component({
	selector: "shared-search-box",
	templateUrl: "./search-box.component.html",
	styles: ``,
})
export class SearchBoxComponent implements OnInit, OnDestroy {
	private debouncer = new Subject<string>();
	private debouncerSubscription?: Subscription;

	@Input() initialValue: string = "";
	@Input() placeholder: string = "";

	@Output() onValue = new EventEmitter<string>();
	@Output() onDebounce = new EventEmitter<string>();

	ngOnInit(): void {
		this.debouncerSubscription = this.debouncer
			.pipe(debounceTime(500))
			.subscribe((value) => {
				this.onDebounce.emit(value);
			});
	}

	ngOnDestroy() {
		this.debouncerSubscription?.unsubscribe();
	}

	onKeyPress(searchTerm: string) {
		this.debouncer.next(searchTerm);
	}
}
