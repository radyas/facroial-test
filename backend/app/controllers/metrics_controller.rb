class MetricsController < ApplicationController
  def index
    render json: Metric.order('timestamp ASC')
  end

  def create
    metric = Metric.new(metric_args)

    if metric.save
      render json: metric, status: :created
    else
      render json: metric.errors, status: :unprocessable_entity
    end
  end


  private

  def metric_args
    params.require(:metric).permit(:name, :value, :timestamp)
  end
end
