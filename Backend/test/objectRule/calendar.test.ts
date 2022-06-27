import {Calendar} from '../../src/objectRule/calendar'

it('Dado un calendario con año 2022, mes junio, dia jueves 20 y numero de semana 4, cuando consulto el año obtengo 2022', ()=>{
    const calendar = new Calendar("2022", "JUNE", 20, "Thursday", 4);
    expect(calendar.getYear()).toBe("2022");
})


