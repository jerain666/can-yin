document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    
    calculateBtn.addEventListener('click', function() {
        calculateTotalCost();
        calculateProfitMargin();
        calculateBreakEvenPoint();
        calculatePaybackPeriod();
    });
    
    // 为所有输入框添加实时计算功能
    const allInputs = document.querySelectorAll('input');
    allInputs.forEach(input => {
        input.addEventListener('input', function() {
            calculateTotalCost();
            calculateProfitMargin();
            calculateBreakEvenPoint();
            calculatePaybackPeriod();
        });
    });
});

function calculateTotalCost() {
    const transferFee = parseFloat(document.getElementById('transferFee').value) || 0;
    const rentDeposit = parseFloat(document.getElementById('rentDeposit').value) || 0;
    const techFee = parseFloat(document.getElementById('techFee').value) || 0;
    const decoration = parseFloat(document.getElementById('decoration').value) || 0;
    const advertisement = parseFloat(document.getElementById('advertisement').value) || 0;
    const equipment = parseFloat(document.getElementById('equipment').value) || 0;
    const material = parseFloat(document.getElementById('material').value) || 0;
    const threeMonthsRent = parseFloat(document.getElementById('threeMonthsRent').value) || 0;
    const labor = parseFloat(document.getElementById('labor').value) || 0;
    const marketing = parseFloat(document.getElementById('marketing').value) || 0;
    const reserve = parseFloat(document.getElementById('reserve').value) || 0;
    
    const totalCost = transferFee + rentDeposit + techFee + decoration + 
                     advertisement + equipment + material + threeMonthsRent + 
                     labor + marketing + reserve;
    
    document.getElementById('totalCost').textContent = totalCost.toFixed(2);
}

function calculateProfitMargin() {
    const snackPrice = parseFloat(document.getElementById('snackPrice').value) || 0;
    const materialCost = parseFloat(document.getElementById('materialCost').value) || 0;
    const packagingCost = parseFloat(document.getElementById('packagingCost').value) || 0;
    
    let profitMargin = 0;
    if (snackPrice > 0) {
        profitMargin = ((snackPrice - materialCost - packagingCost) / snackPrice) * 100;
    }
    
    document.getElementById('profitMargin').textContent = profitMargin.toFixed(2);
}

function calculateBreakEvenPoint() {
    const dailyRent = parseFloat(document.getElementById('dailyRent').value) || 0;
    const dailyLabor = parseFloat(document.getElementById('dailyLabor').value) || 0;
    const dailyEnergy = parseFloat(document.getElementById('dailyEnergy').value) || 0;
    const dailyOther = parseFloat(document.getElementById('dailyOther').value) || 0;
    
    const profitMargin = parseFloat(document.getElementById('profitMargin').textContent) || 0;
    
    let breakEvenPoint = 0;
    if (profitMargin > 0) {
        const dailyCost = dailyRent + dailyLabor + dailyEnergy + dailyOther;
        breakEvenPoint = dailyCost / (profitMargin / 100);
    }
    
    document.getElementById('breakEvenPoint').textContent = breakEvenPoint.toFixed(2);
}

function calculatePaybackPeriod() {
    const fixedTechFee = parseFloat(document.getElementById('fixedTechFee').value) || 0;
    const fixedDecoration = parseFloat(document.getElementById('fixedDecoration').value) || 0;
    const fixedAd = parseFloat(document.getElementById('fixedAd').value) || 0;
    const fixedEquipment = parseFloat(document.getElementById('fixedEquipment').value) || 0;
    const monthlyProfit = parseFloat(document.getElementById('monthlyProfit').value) || 0;
    
    const totalFixedCost = fixedTechFee + fixedDecoration + fixedAd + fixedEquipment;
    
    let paybackPeriod = 0;
    if (monthlyProfit > 0) {
        paybackPeriod = totalFixedCost / monthlyProfit;
    }
    
    document.getElementById('paybackPeriod').textContent = paybackPeriod.toFixed(1);
}