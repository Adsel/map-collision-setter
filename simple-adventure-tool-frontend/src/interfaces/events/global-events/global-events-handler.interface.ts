import {GlobalEventType} from "@/enums/events/global-event-type.enum";

export interface IGlobalEventsHandlerItem {
    eventType: GlobalEventType;
    callback: any;
}
