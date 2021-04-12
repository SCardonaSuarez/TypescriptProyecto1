class Participant {

    fullName: string;
    phone: number;
    email: string;

}

class EventPrincipal {

    eventName: string;
    price: number;
    dateEvent: Date;
    peakCapacity: number;

}

class Asistance {

    fullName: string;
    newEvent: string[];
    lastEvents: string[];
}

let historialParticipant: Asistance[] = [

    {
        fullName: 'Santiago',
        newEvent: ['TypeScript', 'JavaScript'],
        lastEvents: ['HTML', 'CSS', 'Sass', 'Tailwind']
    }
]

