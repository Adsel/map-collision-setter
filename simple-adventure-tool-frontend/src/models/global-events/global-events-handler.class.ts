import {GlobalEventType} from "@/enums/events/global-event-type.enum";
import {IGlobalEventsHandlerItem} from "@/interfaces/events/global-events/global-events-handler.interface";

export class GlobalEventsHandler {
    eventsHandler: IGlobalEventsHandlerItem[] = [];

    appendCallback(eventType: GlobalEventType, callbackFunction: any) {
        if (this.findEventHandler(eventType)) {
            console.warn('Event handler already attached!');
            return;
        }

        this.eventsHandler.push({
            eventType,
            callback: callbackFunction
        });
    }
    emit(eventType: GlobalEventType, data: any): void {
        const handler = this.findEventHandler(eventType);
        if (!handler) {
            console.warn('No method found to handle the event!');
            return;
        }

        handler.callback(new CustomEvent<any>(eventType, {
            detail: data
        }));
    }
    findEventHandler(eventType: GlobalEventType): IGlobalEventsHandlerItem | undefined {
        return this.eventsHandler.find((eventHandler: IGlobalEventsHandlerItem) => eventHandler.eventType === eventType)
    }
}
