const cleanResponse = (obj) => {
    const nearestMrtStation = obj.nearestMrtStation
    const thumbnail = obj.thumbnails[0].uuid
    const website = obj.officialWebsite
    const name = obj.name
    const address = obj.address
    const location = [obj.location.latitude, obj.location.longitute]
    const tags = obj.tags
    const description = obj.description
    const type = obj.type

    return {
        nearestMrtStation,
        thumbnail,
        website,
        name,
        address,
        location,
        tags,
        description,
        type,
    }
}