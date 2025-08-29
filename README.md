<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>店铺投资计算器</title>
    <style>
        :root {
            --primary-color: #3498db;
            --secondary-color: #2980b9;
            --text-color: #444;
            --light-bg: #f8f9fa;
            --border-color: #dee2e6;
        }
        
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.5;
            color: var(--text-color);
            background-color: #f5f7fa;
            padding: 15px;
            font-size: 14px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 15px rgba(0,0,0,0.08);
        }
        
        h1 {
            text-align: center;
            color: #2c3e50;
            margin-bottom: 20px;
            font-size: 22px;
        }
        
        .calculators-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
        }
        
        .calculator-section {
            background: #ffffff;
            border-radius: 6px;
            padding: 16px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.04);
            border: 1px solid var(--border-color);
        }
        
        h2 {
            color: var(--primary-color);
            border-bottom: 1px solid #f0f3f7;
            padding-bottom: 8px;
            margin-top: 0;
            margin-bottom: 15px;
            font-size: 16px;
        }
        
        .input-group {
            margin-bottom: 12px;
        }
        
        label {
            display: block;
            margin-bottom: 4px;
            font-weight: 600;
            color: var(--text-color);
            font-size: 13px;
        }
        
        input {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 3px;
            font-size: 13px;
        }
        
        button {
            background: var(--primary-color);
            color: white;
            border: none;
            padding: 9px 16px;
            font-size: 13px;
            border-radius: 3px;
            cursor: pointer;
            transition: background 0.3s;
            width: 100%;
            font-weight: 600;
            margin-top: 5px;
        }
        
        button:hover {
            background: var(--secondary-color);
        }
        
        .result {
            margin-top: 15px;
            padding: 12px;
            background: #e8f4fc;
            border-radius: 3px;
            font-size: 13px;
        }
        
        .result h3 {
            margin: 0;
            color: #2c3e50;
            font-size: 14px;
        }
        
        @media (max-width: 768px) {
            .calculators-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>店铺投资计算器</h1>
        
        <div class="calculators-grid">
            <div class="calculator-section">
                <h2>建店成本计算</h2>
                <div class="input-group">
                    <label for="deposit">押金 (元):</label>
                    <input type="number" id="deposit" placeholder="输入押金">
                </div>
                <div class="input-group">
                    <label for="transfer-fee">转让费 (元):</label>
                    <input type="number" id="transfer-fee" placeholder="输入转让费">
                </div>
                <div class="input-group">
                    <label for="rent-deposit">房租押金 (元):</label>
                    <input type="number" id="rent-deposit" placeholder="输入房租押金">
                </div>
                <div class="input-group">
                    <label for="tech-fee">技术学习费 (元):</label>
                    <input type="number" id="tech-fee" placeholder="输入技术学习费">
                </div>
                <div class="input-group">
                    <label for="decoration">装修费用 (元):</label>
                    <input type="number" id="decoration" placeholder="输入装修费用">
                </div>
                <div class="input-group">
                    <label for="ad-cost">广告费用 (元):</label>
                    <input type="number" id="ad-cost" placeholder="输入广告费用">
                </div>
                <div class="input-group">
                    <label for="equipment">设备费用 (元):</label>
                    <input type="number" id="equipment" placeholder="输入设备费用">
                </div>
                <button onclick="calculateSetupCost()">计算建店成本</button>
                <div class="result">
                    <h3>总建店成本: <span id="total-setup-cost">0</span> 元</h3>
                </div>
            </div>

            <div class="calculator-section">
                <h2>毛利率计算</h2>
                <div class="input-group">
                    <label for="snack-price">小吃单价 (元):</label>
                    <input type="number" id="snack-price" placeholder="输入单价">
                </div>
                <div class="input-group">
                    <label for="ingredient-cost">食材成本 (元):</label>
                    <input type="number" id="ingredient-cost" placeholder="输入食材成本">
                </div>
                <div class="input-group">
                    <label for="packaging-cost">包装成本 (元):</label>
                    <input type="number" id="packaging-cost" placeholder="输入包装成本">
                </div>
                <button onclick="calculateGrossMargin()">计算毛利率</button>
                <div class="result">
                    <h3>毛利率: <span id="gross-margin">0</span>%</h3>
                </div>
            </div>

            <div class="calculator-section">
                <h2>盈亏平衡点计算</h2>
                <div class="input-group">
                    <label for="monthly-rent">月房租 (元):</label>
                    <input type="number" id="monthly-rent" placeholder="输入月房租">
                </div>
                <div class="input-group">
                    <label for="monthly-labor">月人工成本 (元):</label>
                    <input type="number" id="monthly-labor" placeholder="输入月人工成本">
                </div>
                <div class="input-group">
                    <label for="monthly-energy">月能源成本 (元):</label>
                    <input type="number" id="monthly-energy" placeholder="输入能源成本">
                </div>
                <div class="input-group">
                    <label for="monthly-misc">月杂项支出 (元):</label>
                    <input type="number" id="monthly-misc" placeholder="输入杂项支出">
                </div>
                <div class="input-group">
                    <label for="days-open">月营业天数:</label>
                    <input type="number" id="days-open" value="30" placeholder="输入营业天数">
                </div>
                <button onclick="calculateBreakEven()">计算盈亏平衡点</button>
                <div class="result">
                    <h3>每日盈亏平衡营业额: <span id="break-even">0</span> 元</h3>
                </div>
            </div>

            <div class="calculator-section">
                <h2>回本周期计算</h2>
                <div class="input-group">
                    <label for="fixed-cost">前期固定成本 (元):</label>
                    <input type="number" id="fixed-cost" placeholder="输入固定成本">
                </div>
                <div class="input-group">
                    <label for="monthly-profit">月净利润 (元):</label>
                    <input type="number" id="monthly-profit" placeholder="输入月净利润">
                </div>
                <button onclick="calculateROI()">计算回本周期</button>
                <div class="result">
                    <h3>回本周期: <span id="roi-period">0</span> 个月</h3>
                </div>
            </div>
        </div>
    </div>

    <script>
        // 计算建店总成本
        function calculateSetupCost() {
            const deposit = parseFloat(document.getElementById('deposit').value) || 0;
            const transferFee = parseFloat(document.getElementById('transfer-fee').value) || 0;
            const rentDeposit = parseFloat(document.getElementById('rent-deposit').value) || 0;
            const techFee = parseFloat(document.getElementById('tech-fee').value) || 0;
            const decoration = parseFloat(document.getElementById('decoration').value) || 0;
            const adCost = parseFloat(document.getElementById('ad-cost').value) || 0;
            const equipment = parseFloat(document.getElementById('equipment').value) || 0;

            const totalCost = deposit + transferFee + rentDeposit + techFee + decoration + adCost + equipment;
            document.getElementById('total-setup-cost').textContent = totalCost.toFixed(2);
        }

        // 计算毛利率
        function calculateGrossMargin() {
            const snackPrice = parseFloat(document.getElementById('snack-price').value) || 0;
            const ingredientCost = parseFloat(document.getElementById('ingredient-cost').value) || 0;
            const packagingCost = parseFloat(document.getElementById('packaging-cost').value) || 0;
            
            if (snackPrice <= 0) {
                alert("请输入有效的小吃单价");
                return;
            }
            
            const grossProfit = snackPrice - ingredientCost - packagingCost;
            const marginPercentage = (grossProfit / snackPrice) * 100;
            
            document.getElementById('gross-margin').textContent = marginPercentage.toFixed(2);
        }

        // 计算盈亏平衡点
        function calculateBreakEven() {
            const monthlyRent = parseFloat(document.getElementById('monthly-rent').value) || 0;
            const monthlyLabor = parseFloat(document.getElementById('monthly-labor').value) || 0;
            const monthlyEnergy = parseFloat(document.getElementById('monthly-energy').value) || 0;
            const monthlyMisc = parseFloat(document.getElementById('monthly-misc').value) || 0;
            const daysOpen = parseFloat(document.getElementById('days-open').value) || 30;
            
            const grossMarginEl = document.getElementById('gross-margin');
            const grossMargin = parseFloat(grossMarginEl.textContent) || 0;
            
            if (grossMargin <= 0) {
                alert("请先计算毛利率");
                return;
            }
            
            const totalMonthlyCost = monthlyRent + monthlyLabor + monthlyEnergy + monthlyMisc;
            const dailyCost = totalMonthlyCost / daysOpen;
            const breakEven = dailyCost / (grossMargin / 100);
            
            document.getElementById('break-even').textContent = breakEven.toFixed(2);
        }

        // 计算回本周期
        function calculateROI() {
            const fixedCost = parseFloat(document.getElementById('fixed-cost').value) || 0;
            const monthlyProfit = parseFloat(document.getElementById('monthly-profit').value) || 0;
            
            if (monthlyProfit <= 0) {
                alert("月净利润必须大于0");
                return;
            }
            
            const roiPeriod = fixedCost / monthlyProfit;
            document.getElementById('roi-period').textContent = roiPeriod.toFixed(2);
        }
    </script>
</body>
</html>
