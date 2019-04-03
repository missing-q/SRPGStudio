(function () {

	var alias1 = ItemControl.getEquippedWeapon;
    ItemControl.getEquippedWeapon = function(unit) {
		var i, item, count;
		
		if (unit === null) {
			return null;
		}
		
		count = UnitItemControl.getPossessionItemCount(unit);
		
		// Equipped weapon is the first weapon in the item list.
		for (i = 0; i < count; i++) {
			item = UnitItemControl.getItem(unit, i);
			if (item !== null && this.isWeaponAvailable(unit, item)) {
				return item;
			}
			
			//is does weapon link to a valid ID?
			if (item.custom.linkwep != null) {
				var temp = root.getBaseData().getWeaponList().getDataFromId(item.custom.linkwep)
				
				if (temp != null && this.isWeaponAvailable(unit, temp)) {
					return temp;
				}
			}
			//
		}
		
		return null;
		

	}

})();